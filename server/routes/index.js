module.exports.index = function (req, res) {
  return res.render('index.html');
},

module.exports.recents     = require('./recents');
module.exports.categories  = require('./categories');