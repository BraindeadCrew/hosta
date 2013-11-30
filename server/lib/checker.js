var config = require('config');
var path = require('path');
var fs = require('fs');

module.exports = function () {
  // check if files path is created
  // TODO check if writable and stuff should be good
  var daPath = path.resolve(config['files-path']);
  fs.exists(daPath, function (exists) {
    if (!exists) {
      console.error('Error: files-path (for storage) "'+daPath+'" does not exist on this FileSystem. You should create it :)');
      process.exit(1);
    }
  });
}