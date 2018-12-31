'use strict';

let fs = require('fs');
// let util = require('util');

let file = './' + process.argv.slice(2);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`File path to open: ${file}`);

// read the file data
fs.readFile(file, (err,data)=> {
  if (err) throw err;
  console.log(`After read: ${data.toString()}`);

  // append new data
  let newData = Math.floor(Math.random()*10);
  fs.appendFile(file, newData, (err) => {
    if(err) throw err;
    console.log(`After new contents: ${data.toString()}`);
    fs.readFile(file, (err,data)=> {
      if (err) throw err;
      console.log(`After write: ${data.toString()}`);
    });
  });

});

console.log('end');
