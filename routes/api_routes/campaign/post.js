var _ = require('underscore');
var models = require('grifter-models');
var Campaign = models.Campaign;
var Account  = models.Account;



module.exports = function(req, res) {
  // inspect posted data
  var body = require('./').scrub(req.body);

  if (body.accountId == null){
    res.status(401).send("no Campaign 'AccountAccountId' provided provided");
  }else{
    var now = new Date();
    body.startDate = now;
    body.endDate = now;
    body.AccountAccountId = body.accountId
    createCampaign(body.accountId, body, function  (results) {
      res.json(results);
    });
  }
}

function createCampaign (accountId, data, cb) {
  console.log(">>>", data);
  var campaign = Campaign.build(data);
  campaign.save().then(cb);
}
