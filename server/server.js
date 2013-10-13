var express = require('express');
var path = require('path');
var http = require('http');
var routes = require('./routes');

var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.set('views', path.resolve('../dist'));

// rendering engine (basic html renderer)
app.engine('html', require('ejs').renderFile);

// marker for `grunt-express` to inject static folder/contents
app.use(function staticsPlaceholder(req, res, next) {
  return next();
});

app.use(express.cookieParser());
app.use(express.session({ secret: 'le session cookie is not very hard to understand huh?' }));
app.use(express.bodyParser());

app.get('/', routes.index);
app.get('/files/recents.json', routes.recents);
app.get('/files/categories.json', routes.categories);

http.createServer(app).listen(9001, function() {
  console.log('Express server listening on port ' + 9001);
});

//module.exports = app;