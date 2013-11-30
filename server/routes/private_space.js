var crypto = require('../utils/crypto'),
  Private = require('../service/private').Private;

module.exports = function (req, res) {
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