var _ = require('underscore');
var models = require('grifter-models');
var Model  = models.Native;



module.exports = function(req, res) {
  // inspect posted data
  var body = require('./').scrub(req.body);
  if (body.adId == null){
    res.status(401).send("no Native 'adId' provided provided");
  }else{
    body.AdAdId = body.adId;
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