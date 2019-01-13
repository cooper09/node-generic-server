(function() {
  var API, Door,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  API = require('./api.js');

  Door = (function() {
    function Door(door) {
      var key, value, _ref;
      this.door = door;
      this.resume = __bind(this.resume, this);
      this.override = __bind(this.override, this);
      this.pulseUnlock = __bind(this.pulseUnlock, this);
      _ref = this.door;
      for (key in _ref) {
        value = _ref[key];
        this[key] = value;
      }
    }

    Door.prototype.pulseUnlock = function() {
      return API.post('/api/PanelCommands/PulseDoor', {
        DoorIds: [this.Id]
      }, true);
    };

    Door.prototype.override = function(mode, type) {
      return API.post('/api/PanelCommands/OverrideDoor', {
        DoorIds: [this.Id],
        TimeZoneMode: mode,
        OverrideType: type
      });
    };

    Door.prototype.resume = function() {
      return API.post('/api/PanelCommands/ResumeDoor', {
        DoorIds: [this.Id]
      }, true);
    };

    return Door;

  })();

  module.exports = Door;

}).call(this);
