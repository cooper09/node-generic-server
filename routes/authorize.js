var _ = require('underscore');

//cooper s - lets ad the REQUEST module to the proceedings
var request = require('request');

module.exports = function(req, res){
  console.log("POST body: ", req.body ); 
  
 var JSONObj = {
    "data" : body
 }

request({
    url: "http://localhost:7002/verify",
    method: "POST",
    json: true,   // <--Very important!!!
    body: JSONObj
}, function (error, response ){
    console.log("Ad Verification error: ", error);
    //console.log("Ad Verification response: ", response);
    console.log("Ad Verification body: ", response);
    console.log("Update Data Services with verification");

    //cooper s - hopefully we're verified and can proceed with the auction...

});

  var results = {
      "results" : "And away we go...."
  }
 xres.json(results);
}

function test(response, body) {
    console.log("test function" );
    let results = "Ta-Da!!!";
    response.json(results);
}
