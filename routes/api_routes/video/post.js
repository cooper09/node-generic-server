var _ = require('underscore');
var models = require('grifter-models');
var Model  = models.Video;

module.exports = function(req, res) {
  var body = require('./').scrub(req.body);
  if (body.adId == null){
    res.status(401).send("no Ad 'adId' provided provided");
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
