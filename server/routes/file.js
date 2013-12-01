var fs = require('fs'),
    path = require('path'),
    crypto = require('./../lib/crypto'),
    config = require('config'),
    mmm = require('mmmagic'),
    File = require('./../service/file');

/**
 * POST /api/file request
 * @param req
 * @param res
 */
module.exports = function (req, res) {
    console.log("Uploading file: ", req.body.name);

    saveFile(req.body.name, req.body.input, function (err, downloadPath) {
        if (err) return res.send(500, 'Unable to save file server-side :/');
        var filePath = path.resolve('..', 'dist', downloadPath);
        detectType(filePath, function errorDetectType(error) {
            return res.send(500, error);
        }, function successDetectType(resultType) {
            // file successfully saved to server
            var file = new File({
                name: req.body.name,
                path: downloadPath,
                type: resultType,
                date: new Date().getTime()
            });

            file.save(function (err) {
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
    });
};

var detectType = function (file, errCb, successCb) {
    var Magic = mmm.Magic   ,
        m = new Magic(mmm.MAGIC_MIME_TYPE);
    m.detectFile(file, function (err, result) {
        if (err !== null) {
            errCb(err);
        } else {
            successCb(result);
        }
    });
}

var saveFile = function saveFile(name, data, callback, count) {
    count = count || 0;
    if (count > 42) return callback(new Error('Unable to create a new random folder name, is there any chances that we ran out of ramdomly generated hashes ?'));
    var folderName = crypto.generateKey(8);
    var dirPath = path.resolve(config['files-path'], folderName);
    fs.mkdir(dirPath, function (err) {
        if (err) {
            console.error("Something went wrong while creating folder " + dirPath + ', gonna try again with another random folder name...');
            return saveFile(name, data, callback, ++count); // retry with another random folder name
        }

        // random folder creation succeededlength
        var downloadLink = path.resolve(dirPath, name);
        fs.writeFile(downloadLink, data, 'binary', function (err) {
            if (err) return callback(err);

            return callback(null, downloadLink);
        });
    });
}
