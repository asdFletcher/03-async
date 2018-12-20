'use strict';

// Obtain and assert input
// let files = process.argv.slice(2);
let files = [ '1.txt', '2.txt', '3.txt' ];

for (let i = 0; i < files.length; i++) {
  files[i] = './files/' + files[i];
}

console.log({files});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// vanilla 3x nested callback
// const fileReader = require('./lib/reader-fixed.js');

// if( ! (files instanceof Array && files.length) ) {
//   throw new Error('Invalid Args');
// }

// fileReader(files, (err,data) => {
//   if ( err ) { throw err; }
//   console.log('From Callback:', data);
// });
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// n callbacks
const fileReader = require('./lib/reader-callbacks-array.js');

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~








// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // test synchronous file reader
// const fileReader = require('./lib/reader-callbacks-array.js');
// if( !(files instanceof Array && files.length) ) {
//   throw new Error('Invalid Args');
// }

// let myCb = () => (err,data) => {
//   if ( err ) { throw err; }
//   // console.log('From Callback:', data);
// };
// fileReader(files, myCb);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// test vanilla file reader
// const fileReader = require('./lib/reader-fixed.js');
// if( ! (files instanceof Array && files.length) ) {
//   throw new Error('Invalid Args');
// }

// fileReader(files, (err,data) => {
//   if ( err ) { throw Error(err); }
//   console.log('From Callback:', data);
// });
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~








// -- DONE --
// read in 3 files (don't use promise.all)
// use 3 discrete callbacks

// read in 3+ files (don't use promise.all)
// use nested calls and a while loop to pass functins into a function

// read 3+ files using promise.all (easy!)