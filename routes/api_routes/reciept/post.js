var _ = require('underscore');
var models = require('grifter-models');
var Model  = models.Reciept;



module.exports = function(req, res) {
  // inspect posted data
  var body = require('./').scrub(req.body);
  if (body.campaignId == null){
    res.status(401).send("no Reciept 'campaignId' provided provided");
  }else{
    body.CampaignCampaignId = body.campaignId;
    createOne( body, function  (results) {
      res.json(results);
    });
  }
}

function createOne(data, cb) {
  console.log(">>>", data);
  var entry = Model.build(data);
  entry.save().then(cb);
}