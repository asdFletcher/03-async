'use strict';

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

// Our module exports a single function that expects an array of files
module.exports = exports = (files) => {
  return readAll([...files]);
  
};


// This wraps the fs module, primarily so that we can more easily write tests around it.
const readOne = (file) => {
  return readFile(file);
};


// Reads and returns the contents of 3 files
// Requires 3 paths, otherwise, it'll fail with aggression
const readAll = (paths) => {

  let contents = [];

  return readOne(paths[0])
    .then( (data) => {
      contents.push(data.toString().trim());
      return readOne(paths[1]);
    })
    .then( (data) => {
      contents.push(data.toString().trim());
      return readOne(paths[2]);
    })
    .then((data) => {
      contents.push(data.toString().trim());
      return contents;
    })
    .catch( (err) => {
      throw err;
    } );
};

