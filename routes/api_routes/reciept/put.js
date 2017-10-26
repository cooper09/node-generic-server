var _ = require('underscore');
var models = require('grifter-models');
var Model  = models.Reciept;

module.exports = function(req, res){
  var body = require('./').scrub(req.body);
  console.log("updates >", updates);

  var identifier = req.params.identifier;
  if( identifier == null ) {
    res.status(401).send("no 'identifier' provided provided");
  }else{
    updateRecord(identifier, body, function  (results) {
      res.json(results);
    });
  }
}

function updateRecord (identifier, changes, cb) {
  Model.update(changes,{where:{id:identifier}}).then(cb);
}
