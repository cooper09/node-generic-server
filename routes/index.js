// Future home of the Web UI


var pkg = require('../package.json');
module.exports = function(req, res){
  res.send(getEndpoints());
}

function getEndpoints(){
  var version = pkg.version;
  var title = pkg.name;
  var desc = pkg.description;
  var deployment =  process.env.DEPLOYMENT || "development";
  var endpoints = require("../endpoints")["endpoints"];
  var str = "<head><style>ul {list-style-type: none;}</style></head><h1><p>"+title+" (Version: "+version+" | "+deployment+") </p></h2>";

  str += "<p>"+desc+"</p><p><ul>";
  for (var i=0; i<endpoints.length; i++){

    str +=  ("<li><pre>ENDPOINT:\t" + endpoints[i].path + "<pre/></li>");
    str +=  ("<li><pre>METHODS:\t[" + endpoints[i].methods + "]</pre></li>");
    str +=  ("<li><pre>" + endpoints[i].description + "</pre></li><hr/>");
  }
  str += "</ul><p/>"
  return str
}