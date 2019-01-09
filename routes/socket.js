var _ = require('underscore');

//cooper s - lets ad the REQUEST module to the proceedings
var request = require('request');

module.exports = function(req, res){
  console.log("Socket server: ", req.body ); 
  
 var JSONObj = {
    "data" : req.body
 }

  var results = {
      "results" : "Socket to me..."
  }
 res.json(results);
}//end export
