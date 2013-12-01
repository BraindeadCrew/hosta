var mongoose = require('mongoose');

require('./connection');

var Private = mongoose.model('Private', {
  key: { type: 'String', unique: true },
  name: String,
  visibility: String
});

module.exports.Private = Private;