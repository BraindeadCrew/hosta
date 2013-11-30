var main    = require('./main'),
    file    = require('./file'),
    recents = require('./recents'),
    files   = require('./files'),
    privateSpace = require('./private_space'),
    thisisnotthepageyouarelookingfor = require('./thisisnotthepageyouarelookingfor');

module.exports = function (app) {
  // HTML
  app.get('/', main);

  // API
  app.get('/api/files/:id', files);
  app.get('/api/recents', recents);
  app.get('/api/recents/:type', recents);
  app.post('/api/file', file);

  app.post('/api/p', privateSpace);

  // Default route handling
  app.get('/*', thisisnotthepageyouarelookingfor);
}
