var main    = require('./main'),
    file    = require('./file'),
    recents = require('./recents');

module.exports = function (app) {
// GET routes
  app.get('/', main);
  app.get('/recents', recents);

// POST routes
  app.post('/file', file);
}