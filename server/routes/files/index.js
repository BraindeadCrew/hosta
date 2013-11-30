var pic = require('./picture');

module.exports = function (req, res) {
  var type = req.params.type;

  switch (type) {
    case 'pic':
      return pic(req, res);

    case 'vid':
      return res.send(404, 'vid type not handled yet');

    default:
      return res.send(404, 'Unable to find requested route. Only "pic" is handled for now');
  }
}