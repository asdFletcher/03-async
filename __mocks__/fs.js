'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    throw new Error('error');
  }
  else {
    cb(undefined, new Buffer(file));
  }
};