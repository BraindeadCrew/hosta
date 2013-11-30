var mongoose = require('mongoose');

require('./connection');

var File = mongoose.model('File', {
  name: String,
  path: String,
  type: String,
  date: String
});

module.exports = File;
