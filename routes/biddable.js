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


module.exports = function(req, res){
  var body = req.body;
  var target = body.target;
  var bannerType = body.type;
  console.log("target:",target);
  console.log("bannerType:",bannerType);
  Target.findAll({where:target, include: [
    { model: Campaign, include: [
      { model: Ad,
        include:[
          Banner,
          Video,
          Native,
          Audio
        ]},
      { model: Reciept }]
    }
  ]}).then(function  (results) {
    console.log("results:",results.length);
    // _.each(results, function (target_result) {
    //   // console.log(">", target_result.dataValues);
    // });
    res.json(results);
  });
}