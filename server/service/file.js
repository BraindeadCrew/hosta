var mongoose = require('mongoose'),
    config   = require('config');
	
mongoose.connect(config['mongodb']);

var File = mongoose.model('File', {
  name: String,
  path: String,
  type: String,
  date: String
});

module.exports = File;