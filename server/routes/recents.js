var File = require('./../service/file');

/**
 * GET /api/recents/:type
 * @param req
 * @param res
 */
module.exports = function (req, res) {
  var type = req.params.type;
  if (type) {
    // narrow the result to specific type
    return res.send('404', 'Not implemented yet');

  } else {
    File.find().sort({date: -1}).limit(10).exec(function (err, files) {
      if (err) return res.json({error: 'Something went wrong :/'});

      return res.json(files);
    });
  }
};