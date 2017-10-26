var EZBake = require("ezbake");
var grifter = require("grifter-js");

var data_url = mongo_url("ds021691.mlab.com","grifter-data", 21691, "grifter-api", "YE5-7ug-LZK-pmA");
var loggin_url = mongo_url("ds021691.mlab.com","grifter-logging", 21691, "grifter-logging", "NG7-PAC-dr7-rJM");

var ez = new EZBake();

ez.loadEndpoints(require("./endpoints"));

grifter.core.database.configure(loggin_url,data_url, function () {
  ez.startServer();
});
function mongo_url (host, dbname, port, user, pass) {
  return "mongodb://"+user+":"+pass+"@"+host+":"+port+"/"+dbname;
}