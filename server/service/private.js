var mongoose = require('mongoose');

require('./connection');

var Private = mongoose.model('Private', {
  key: { type: 'String', unique: true }
});

module.exports.Private = Private;