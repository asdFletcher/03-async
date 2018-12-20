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
    if(err) { callback(err); }
    else { callback(undefined, data, count); }
  });
};


// Reads and returns the contents of 3 files
// Requires 3 paths, otherwise, it'll fail with aggression
const readAll = (paths, callback) => {

  let contents = [];
  let count = 0;
  readOne(paths[0], (function fancyCallback(err,data,count){
    // console.log({err});
    if (err) {callback(err);}
    else{
      // if no error, add the data
      // console.log(`just read file: ${paths[count]}`);
      // console.log(`Data: ${data}`);
      contents.push(data.toString().trim());

      // if we are not done, count will be less than paths.length
      if (count < paths.length - 1){
        // console.log(`continuing: count: ${count}, paths.length: ${paths.length}`);
        // increment count, and keep calling
        count++;
        readOne(paths[count], fancyCallback, count);
      } else {
        // we're done
        // console.log('we are done');
        callback(undefined, contents);
      }
    }


  }), count);
};

