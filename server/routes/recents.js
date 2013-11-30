var config = require('./../config/config.js'),
    nano   = require('nano')('http://'+config.db.host+':'+config.db.port);

var db = nano.db.use(config.db.name);

module.exports = function (req, res) {
  db.get('_design/all/_view/all', { revs_info: true }, function(err, body) {
    if (!err) console.log(body);


  });

  res.json([
    {
      name: 'foo.png',
      typeico: 'images/image_ico.png',
      url: 'uploads/foo.png',
      date: '11:24 13/04/2013'
    },
    {
      name: 'bar.jpg',
      typeico: 'images/image_ico.png',
      url: 'uploads/foo.png',
      date: '15:25 13/04/2013'
    },
    {
      name: 'potato.yummy',
      typeico: 'images/image_ico.png',
      url: 'uploads/foo.png',
      date: '11:42 13/04/2013'
    }
  ]);
};