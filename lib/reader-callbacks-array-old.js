'use strict';

const fs = require('fs');
let contents = [];

// Our module exports a single function that expects an array of files

module.exports = exports = (files, callback) => {
  readAll([...files],callback);
  contents = [];
};


// This wraps the fs module, primarily so that we can more easily write tests around it.

const readOne = (file, cb) => {
  console.log('here 2');
  // fs.readFile( file, (err, data) => {
  //   if(err) { cb(err); }
  //   else {
  //     // console.log(`Reading File: ${file}`);
  //     // console.log(`contents: ${contents}`);
  //     cb(undefined, data); 
  //   }
  // });
  contents.push(fs.readFileSync(file).toString().trim());
};

function readAll(files, callback) {
  console.log(`here 1`);
  // loop thru each file
  for (let i = 0; i < files.length; i++){

    // ~~~~~~~~~~ loop ~~~~~~~~~~
    // readOne(files[i], (err, data) => {
    //   if (err) {
    //     callback(err);
    //   } else {
    //     console.log(`pushing data: ${data}`);
    //     contents.push(data.toString().trim());
    //   }
    // });
    // ~~~~~~~~~~ loop ~~~~~~~~~~
    readOne(files[i]);

  }
  setTimeout(() => { console.log({contents});}, 1000);
  callback(undefined,contents);
}

// readOne(paths[0], (err, data) => {
//   if (err) {
//     callback(err);
//   }
//   else {
//     console.log('Read File 1');
//     contents.push(data.toString().trim());
//   }
// });