var config = require('./../config/config.js'),
    nano   = require('nano')('http://'+config.db.host+':'+config.db.port),
    fs     = require('fs'),
    path   = require('path'),
    crypto = require('crypto');

// init db
var db = nano.db.use(config.db.name);

/**
 * POST /file request
 * @param req
 * @param res
 */
module.exports = function (req, res) {
  console.log("Uploading file: ", req.body.name);

  saveFile(req.body.name, req.body.input, function (err, fullpath, downloadPath) {
    if (err) return res.send(500, 'Unable to save file server-side :/');

    // file successfully saved to server
    var file = { path: fullpath };

    db.insert(file, function (err, body, headers) {
      if (err) {
        // unable to save file in db, removing file from server
        fs.unlink(fullpath, function (err) {
          // ignore err ?
          return res.send(500, 'Unable to add file to database :/');
        });
      }

      return res.json({result: 0, link: downloadPath});
    });
  });
}

var saveFile = function saveFile(name, data, callback, count) {
  count = count || 0;
  if (count > 42) return callback(new Error('Unable to create a new random folder name, is there any chances that we ran out of ramdomly generated hashes ?'));
  var seed = crypto.randomBytes(20);
  var folderName = crypto.createHash('sha1').update(seed).digest('hex').substr(0, 8);
  var dirPath = path.resolve('..', 'dist', 'files', folderName);
  fs.mkdir(dirPath, function (err) {
    if (err) {
      console.error("Something went wrong while creating folder "+dirPath+', gonna try again with another random folder name...');
      return saveFile(name, data, callback, ++count); // retry with another random folder name
    }

    // random folder creation succeededlength
    var downloadLink = 'files/'+folderName+'/'+name;
    var fullpath = path.resolve(dirPath, name);
    console.log('fullpath: '+fullpath);

    fs.writeFile(fullpath, data, 'binary', function (err) {
      if (err) return callback(err);

      return callback(null, fullpath, downloadLink);
    });
  });
}