var models = require('grifter-models');
var Account = models.Account;

module.exports = function(req, res){
  // inspect posted data
  var body = require('./').scrub(req.body);

  if( body.name == null) {
    res.status(401).send("no Account 'name' provided provided")
  }else{
    createAccount(body.name, function  (results) {
      res.json(results);
    });
  }
}

function createAccount (name, cb) {
  var act = Account.build({name:name})
  act.save().then(cb);
}