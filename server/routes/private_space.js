var crypto = require('../lib/crypto'),
  Private = require('../service/private').Private;

module.exports.create = function (req, res) {
  var key, privateObj;

  key = crypto.generateKey(10);
  privateObj = new Private({ key: key });
  privateObj.save(function (err, obj) {
    if (err) {
      res.json(500, {"error": "unable to create a private space."});
    } else {
      res.json({ "private": key });
    }
  });
}

module.exports.getJson = function (req, res) {
  Private.findOne({key: req.param('id')}, function (err, success) {
    if (err) {
      res.json(404, {"error": "private storage not found."});
    } else {
      res.json(success);
    }
  });
}

module.exports.update = function (req, res) {
  Private.findOneAndUpdate({key: req.param('id')}, { name: req.param('name'),
    visibility: req.param('visibility') }, function (err, val) {
    if (err) {
      res.json(500, { "err": "Update failed" });
    } else {
      res.json(val);
    }
  });
}