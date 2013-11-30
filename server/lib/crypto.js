var crypto = require('crypto');

function generateKey(n) {
  var seed = crypto.randomBytes(20);
  return crypto.createHash('sha1').update(seed).digest('hex').substr(0, n);
}

module.exports = {
  'generateKey': generateKey
}

