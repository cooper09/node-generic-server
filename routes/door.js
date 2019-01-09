var _ = require('underscore');

//cooper s - lets ad the REQUEST module to the proceedings
var request = require('request');

module.exports = function(req, res){
  console.log("Door: ", req.body ); 
  
 var JSONObj = {
    "data" : req.body
 }

  var results = {
      "results" : "Doors are operational...."
  }


 res.json(results);

 function pulseUnlock() {
    console.log("Door.pulseUnlock");
 }


}//end export
