var config = require('./../config/config.js'),
    nano   = require('nano')('http://'+config.db.host+':'+config.db.port),
    fs     = require('fs'),
    path   = require('path');

// init db
var db = nano.db.use(config.db.name);

/**
 * POST /file request
 * @param req
 * @param res
 */
module.exports = function (req, res) {
  console.log("POST /file ", req.body);
  // TODO save file to db and stuff
  res.json({status: 'Success'});
}