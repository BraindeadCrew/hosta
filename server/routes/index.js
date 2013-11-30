var main    = require('./main'),
    file    = require('./file'),
    recents = require('./recents'),
    files   = require('./files'),
    privateSpace = require('./private_space'),
    thisisnotthepageyouarelookingfor = require('./thisisnotthepageyouarelookingfor');

module.exports = function (app) {
  // GET routes
  app.get('/', main);
  app.get('/recents', recents);
  app.get('/:type/:id', files);

  // POST routes
  app.post('/file', file);

  app.post('/api/p', privateSpace);

  // Default route handling
  app.get('/*', thisisnotthepageyouarelookingfor);
}
