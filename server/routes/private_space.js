var crypto = require('../utils/crypto');

module.exports = function(req, res) {
  res.json({ "private": crypto.generateKey(10)})
}


