var mongoose = require('mongoose'),
    config = require('config');
	
mongoose.connect(config['mongodb']);

var File = mongoose.model('File', { name: String, path: String, type: String });

module.exports = {
  'File': File
}
