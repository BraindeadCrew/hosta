var pic = require('./pic');

module.exports = function (req, res) {
  var type = req.params.type;

  try {
    require('./'+type)(req, res);
    
  } catch (err) {
    return res.send(404, 'Unable to find requested route. Only "pic" is handled for now');
  }
}