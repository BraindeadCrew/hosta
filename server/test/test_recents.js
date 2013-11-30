var config = require('./../config/config.js'),
  nano   = require('nano')('http://'+config.db.host+':'+config.db.port);

var db = nano.db.use(config.db.name);

db.get('_design/all/_view/all', { revs_info: true }, function(err, body) {
  if (!err) {
    console.log(body.rows);
  } else {
    console.log(err);
  }
});