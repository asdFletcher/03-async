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
const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data); }
  });
};


// Reads and returns the contents of 3 files
// Requires 3 paths, otherwise, it'll fail with aggression
const readAll = (paths, callback) => {

  let contents = [];
  readOne(paths[0], (err, data) => {
    if (err) {
      throw new Error(err);
    }
    else {
      contents.push(data.toString().trim());
    }

    readOne(paths[1], (err, data) => {
      if (err) {
        throw new Error(err);
      }
      else {
        contents.push(data.toString().trim());
      }

      readOne(paths[2], (err, data) => {
        if (err) {
          throw new Error(err);
        }
        else {
          contents.push(data.toString().trim());
          callback(null, contents);
        }
      });

    });

  });

  
};

