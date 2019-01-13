var _ = require('underscore');

//cooper s - lets ad the REQUEST module to the proceedings
var request = require('request');

module.exports = function(req, res){
  console.log("Authorize: ", req.body ); 
  
 var ProtectorNet = new require('../ProtectorNet/protectornet.js');

  util = require('util');

  let myLogin = ProtectorNet.login().then(function(res) {
    console.log("Successfully logged in");
    return ProtectorNet.getDoors().then(function(doors) {
      var door, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = doors.length; _i < _len; _i++) {
        door = doors[_i];
        _results.push(console.log("Unlocking " + door.Name));
		door.pulseUnlock();
      }
      return _results;
      //res.json(results);
    });
  })["catch"](function(err) {
    console.log(err);
    res.json("Failed to login, check credentials.");
  });

  res.json(myLogin);

  var results = {
      "results" : "You are now authorized..."
  }

}//end export

