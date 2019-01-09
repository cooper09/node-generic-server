(function() {
  var config, request;

  request = require('request-promise');

  config = require('../config.json');

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  module.exports = {
    get: function(route, parameters) {
      return this.apiCall("GET", route, parameters);
    },
    post: function(route, parameters, fullResponse) {
      if (fullResponse == null) {
        fullResponse = false;
      }
      return this.apiCall("POST", route, parameters, fullResponse);
    },
    apiCall: function(method, route, parameters, fullResponse) {
      return request({
        method: method,
        uri: "https://" + config.Server + route,
        crossDomain: true,
        resolveWithFullResponse: fullResponse,
        rejectUnauthorized: false,
        body: parameters,
        json: true,
        jar: true
      });
    }
  };

}).call(this);
