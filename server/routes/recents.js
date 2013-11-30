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
    // give the last 10 uploads
    return res.json([
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
  }
};
