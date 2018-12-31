'use strict';

const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

module.exports = files => Promise.all(files.map(path => readFile(path)));
