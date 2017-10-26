var _ = require('underscore');

module.exports.get    = require('./get');
module.exports.post   = require('./post');
module.exports.put    = require('./put');
module.exports.delete = require('./delete');

module.exports.scrub = function (body) {
  return _.pick( body, "title", "description", "mimes", "minduration", "maxduration","protocols", "w", "h",
   "startdelay", "linearity", "skip", "skipmin", "skipafter", "sequence", "battr", "maxextended", "minbitrate","maxbitrate", "boxingallowed", "playbackmethod", "adId" );
}
