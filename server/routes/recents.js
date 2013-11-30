/**
 * GET recents
 * @param req
 * @param res
 */
module.exports = function (req, res) {

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
