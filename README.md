![CF](http://i.imgur.com/7v5ASc8.png) LAB: Async
=================================================

## Lab 03

### Author: Fletcher LaRue

### Links and Resources

[![Build Status](https://www.travis-ci.com/asdFletcher/03-async.svg?branch=master)](https://www.travis-ci.com/asdFletcher/03-async)

* [repo](https://github.com/asdFletcher/03-async)
* [travis](https://www.travis-ci.com/asdFletcher/03-async)

--- 

---
Description:
This project involves using 3 different types of asyncronous JavaScript functionalities to read data from local files. All the modules perform similar tasks (reading local files), but each has different functionality, implementation and tests.

---
### Modules
#### `reader-fixed.js`
#### `reader-callbacks-array.js`
#### `reader.js` (Deprecated, do not use, does not work)
---
##### Exported Values and Methods for the following modules:

#### `reader-fixed.js`
#### `reader-callbacks-array.js`

* Methods:
    * `anonymous function definition`
* Attributes:
    * none

---


##### Using the following modules:
The modules:

- #### `reader-fixed.js`
- #### `reader-callbacks-array.js`

export an anonymous function that reads local files.

This function behaves as follows:
* `(files, callback) => ... `
    * Takes an array of file paths to be read, and a callback function that executes when the files are read.
    * Returns an array of the contents of each file, in the order that it was specified in the `files` array.
    * Implemented using `fs.readFile`
    * Calls to read files are sent synchronously to preserve output array order



---

### Testing

Test files for each module are located in the repository as follows:
* `reader-callbacks-array.js`: `__tests__/lib/reader-callbacks-array.test.js`
* `reader-fixed.js`: `__tests__/lib/reader.test.js`


To perform testing using jest, run the following command in the terminal from the root of a local copy of the repository:
```JavaScript
npm jest --verbose --coverage
```

It is useful to bind this command to:
```JavaScript
npm test
```

An example of the `package.json` contents that create this bind is as follows:
```JavaScript
  "scripts": {
    "test": "jest --verbose --coverage",
    "test-watch": "jest --watchAll --verbose --coverage"
  }
```

To create a `package.json` file run:
```JavaScript
npm init
```

1. asdf
1. asdf
1. qqq
    1. asdf
    1. asdf
    - asdf
        - asdf
            - asdf
                - asdf
                    * asdf
                        * asa



1. _asdf_
_asdfsdf_
*asdfasdfasdf*
*asdfasdf
_asdfasfasdf
@asdfasdf@
#asdfasdf#
$asfasdf$


%adsfasdfasdf%
^asdfasdfasfd^



---

### Dependencies

* TODO: list project setup instructions
