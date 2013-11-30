var File = require('./../service/file');
var tintpyalf = require('./thisisnotthepageyouarelookingfor');
var path = require('path');

/**
 * GET /raw/:id
 * @param req
 * @param res
 */
module.exports = function (req, res) {
  File.findOne({_id: req.params.id}, function (err, file) {
    if (err) return tintpyalf(req, res);

    return res.sendfile(path.resolve(__dirname, '..', '..', 'dist', file.path));
  });
}