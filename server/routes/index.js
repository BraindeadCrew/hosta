var main    = require('./main'),
    file    = require('./file'),
    recents = require('./recents'),
    files   = require('./files'),
    raw     = require('./raw'),
    privateSpace = require('./private_space'),
    thisisnotthepageyouarelookingfor = require('./thisisnotthepageyouarelookingfor');

module.exports = function (app) {
  // HTML
  app.get('/', main);
  app.get('/raw/:id', raw);

  // API
  app.get('/api/files/:id', files);
  app.get('/api/recents', recents);
  app.get('/api/recents/:type', recents);
  app.post('/api/file', file);
  app.get('/api/private/:id', privateSpace.getJson);

  app.post('/api/p', privateSpace.create);

  // Default route handling
  app.get('/*', thisisnotthepageyouarelookingfor);
}
