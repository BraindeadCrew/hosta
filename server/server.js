var express = require('express');
var path = require('path');
var http = require('http');
var routes = require('./routes');

var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.set('views', path.resolve('../dist'));

// rendering engine (basic html renderer)
app.engine('html', require('ejs').renderFile);

app.use(express.cookieParser());
app.use(express.session({ secret: 'le session cookie is not very hard to understand huh?' }));
// to handle POST request body
app.use(express.bodyParser());

// externalize all route handlers
routes(app);

// CREATE SERVER
http.createServer(app).listen(9001, function() {
  console.log('Express server listening on port ' + 9001);
});