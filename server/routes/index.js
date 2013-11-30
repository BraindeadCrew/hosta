var main    = require('./main'),
    file    = require('./file'),
    recents = require('./recents'),
    files   = require('./files'),
    thisisnotthepageyouarelookingfor = require('./thisisnotthepageyouarelookingfor');

module.exports = function (app) {
  // HTML
  app.get('/', main);

  // API
  app.get('/api/files/:id', files);
  app.get('/api/recents', recents);
  app.get('/api/recents/:type', recents);
  app.post('/api/file', file);

  // Default route handling
  app.get('/*', thisisnotthepageyouarelookingfor);
}