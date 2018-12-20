'use strict';

let fs = require('fs');
// let util = require('util');

console.log('```````````````````');
console.log('opening');
let file = './test.txt';

// read the file data
fs.readFile(file, (err,data)=> {
  if (err) throw err;
  console.log(`Before: ${data.toString()}`);

  // append new data
  let newData = Math.floor(Math.random()*10);
  fs.appendFile(file, newData, (err) => {
    if(err) throw err;
    console.log(`After append, before new read: ${data.toString()}`);
    fs.readFile(file, (err,data)=> {
      if (err) throw err;
      console.log(`After: ${data.toString()}`);
    });
  });

});

console.log('end');
