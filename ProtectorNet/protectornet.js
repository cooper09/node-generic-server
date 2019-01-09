(function() {
  var API, Config, Door, ProtectorNet, signalr,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  signalr = require('signalr-client');

  API = require('./api.js');

  Config = require('../config.json');

  Door = require('./door.js');

  ProtectorNet = (function() {
    ProtectorNet.prototype.authenticated = false;

    function ProtectorNet() {
      this.login = __bind(this.login, this);
      this.signalR = new signalr.client("wss://" + Config.Server + "/rt/signalr", ['notificationHub'], 10, false);
    }

    ProtectorNet.prototype.login = function() {
      console.log("ProtectorNet.login: " );
      return API.post("/auth", {
        userName: Config.UserName,
        password: Config.Password
      }, true).then((function(_this) {
        return function(res) {
          _this.authenticated = true;
          _this.signalR.headers.cookie = res.headers['set-cookie'].join(';');
          _this.signalR.on('notificationHub', 'notification', function(notifications) {
            var notification, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = notifications.length; _i < _len; _i++) {
              notification = notifications[_i];
              _results.push(console.log(notification));
            }
            console.log("ProtectorNet.login: ", _results );
            return _results;
          });
          _this.signalR.start();
          return API.get("/api/AuthDetails").then(function(res) {
            return _this.customer = res;
          });
        };
      })(this));
    };

    ProtectorNet.prototype.logoff = function() {
      return API.post("/auth/logout").then((function(_this) {
        return function(res) {
          return _this.authenticated = false;
        };
      })(this));
    };

    ProtectorNet.prototype.getDoors = function() {
      return API.get("/api/Doors").then((function(_this) {
        return function(res) {
          var doorInstance, doors, _i, _len, _ref;
          if (res.ResponseStatus !== null) {
            throw res.ResponseStatus;
          }
          doors = [];
          _ref = res.Results;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            doorInstance = _ref[_i];
            doors.push(new Door(doorInstance));
          }
          return doors;
        };
      })(this));
    };

    return ProtectorNet;

  })();

  module.exports = new ProtectorNet;

}).call(this);
