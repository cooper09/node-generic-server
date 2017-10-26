var _ = require('underscore');
var models = require('grifter-models');
var Model = models.Target;

module.exports = function(req, res){
  // determine if we're returning one or all records
  var identifier = req.params.identifier;
  if(identifier) {
    getOne(identifier, function (results) {
      if (results){
        res.json(results);
      }else{
        res.sendStatus(404);
      }
    });
  }else{
    var query = req.query;
    if(_.isEmpty(query)){
      getAll(function (results) {
        res.json(results);
      });
    }else{
      getAllMatchingQuery(query, function (results) {
        res.json(results);
      });
    }
  }
}

function getAll (cb) {
  Model.findAll({}).then(cb);
}

function getAllMatchingQuery (query,cb) {
  Model.findAll({where:query}).then(cb);
}

function getOne ( identifier, cb ) {
  Model.findOne({ where:{ id:identifier }}).then(cb);
}
