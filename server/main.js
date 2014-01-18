var express = require('express');
var path = require('path');
var http = require('http');
var routes = require('./routes');
var checker = require('./lib/checker');

var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.set('views', path.resolve(__dirname, '..', 'dist'));

// rendering engine (basic html renderer)
app.engine('html', require('ejs').renderFile);

app.use(express.cookieParser());
app.use(express.session({ secret: 'le session cookie is not very hard to understand huh?' }));
// to handle POST request body
app.use(express.bodyParser({limit: '15mb'}));

// externalize all route handlers
routes(app);

// check server config integrity
// (this will exit process if something goes CRAZY MOFOS)
checker();

// CREATE SERVER
http.createServer(app).listen(9001, function() {
  console.log('Express server listening on port ' + 9001);
});