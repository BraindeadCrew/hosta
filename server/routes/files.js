var File = require('./../service/file.js').File;

/**
 * GET /api/files/:id
 * @param req
 * @param res
 * @returns {*}
 */
module.exports = function (req, res) {
  var id = req.params.id;

  File.findOne({_id: id}, function (err, file) {
    if (err) {
      return res.send(404, {error: "resource '"+id+"' not found"});
    }
    return res.json(file);
  });
}