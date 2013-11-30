var config = require('./../../config/default');
var nano = require('nano')('http://' + config.db.host + ':' + config.db.port);

// init db
var db = nano.db.use(config.db.name);

/**
 * GET /api/files/:id
 * @param req
 * @param res
 * @returns {*}
 */
module.exports = function (req, res) {
  var id = req.params.id;



  return res.send(404, '/api/files/:id is not implemented yet');
}