var _ = require('underscore');

var api_routes = require('./api_routes');

var supported_versions = ["v1"];
var supported_models = ["account", "ad", "campaign", "reciept", "target", "video","banner", "native", "audio" ];

module.exports = function(req, res){
  var api_version = req.params.version;
  var api_model = req.params.model;
  var api_identifier = req.params.identifier;
  var api_method = req.method.toLowerCase();
  console.log("version", api_version);
  console.log("model", api_model);
  console.log("identifier", api_identifier);
  console.log("method", api_method);

  if (_.contains(supported_models, api_model) && _.contains(supported_versions, api_version)){
    api_routes[api_model][api_method](req, res);
  }else{
    res.sendStatus(400);
  }
}