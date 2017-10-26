var _ = require('underscore');
var models = require('grifter-models');
var Model  = models.Ad;

module.exports = function(req, res) {
  // inspect posted data
  var body = require('./').scrub(req.body);
  console.log(">>>", body);
  if (body.campaignId == null){
    res.status(401).send("no 'campaignId' provided provided");
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
