var File = require('./../service/file.js').File;
var route404 = require('./404.js');

/**
 * GET /api/files/:id
 * @param req
 * @param res
 * @returns {*}
 */
module.exports = function (req, res) {
  var id = req.params.id;

  File.findOne({_id: id}, function (err, file) {
    if (err) return route404(req, res);
    
    return res.json(file);
  });
}