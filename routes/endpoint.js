var _ = require('underscore');
var models = require('grifter-models');
var Campaign  = models.Campaign;
var Ad        = models.Ad;
var Reciept   = models.Reciept;
var Target    = models.Target;
var Banner    = models.Banner;
var Video     = models.Video;
var Native    = models.Native;
var Audio     = models.Audio;

//cooper s - lets ad the REQUEST module to the proceedings
var request = require('request');

module.exports = function(req, res){
  console.log("POST body: ", req.body.target ); 
  var body = req.body.target;
  console.log("POST body: ",body );
  var target = body.target;
  console.log("POST body target: ",body.target );
// cooper s - received a request, VERIFY ad via the ad service

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

    auction(res, body);
});

  var results = {
      "results" : "And away we go...."
  }
 // res.json(results);
}

function auction(response, body) {
    console.log("Auction is now running: ", body );

    console.log("Time to check our AI");
    var ai_results = ai(body);
    
    console.log("Our AI results: ", ai_results );
    var results = {
      "auction results" : "The auction is over..."
    }
    // Once our ad is verified and the AI has made a prediction

    // plug them into the auction
  console.log("Auction Results: ", results );
    response.json(results);
}

function ai(body) {
    console.log("AI all the way: ", body );
    /* connect to a our "Big Data" here, 
        1) what are we trying to learn?
        2) What do you we need to predict?  */
    var results = {
        "ai results" : "The AI results..."
    }

    return results;
}