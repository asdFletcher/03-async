'use strict';

const util = require('util');
const fs = require('fs');
let contents = [];

// Our module exports a single function that expects an array of files
module.exports = exports = (files, callback) => {
  readAll([...files],callback);
  contents = [];
};


// This wraps the fs module, primarily so that we can more easily write tests around it.
const readOne = (file, callback, count) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw new Error(err); }
    else { callback(null, data, count); }
  });
};


// Reads and returns the contents of 3 files
// Requires 3 paths, otherwise, it'll fail with aggression
const readAll = (paths, callback) => {

  let contents = [];
  let count = 0;
  readOne(paths[0], (function fancyCallback(err,data,count){
    if (err) { throw new Error(err); }
    else{
      // if no error, add the data
      contents.push(data.toString().trim());

      // if we are not done, count will be less than paths.length
      if (count < paths.length - 1){
        count++;
        readOne(paths[count], fancyCallback, count);
      } else {
        // we're done
        callback(null, contents);
      }
    }

  }), count);
};

