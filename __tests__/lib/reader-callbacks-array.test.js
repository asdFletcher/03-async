'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-callbacks-array.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });


  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

  it('reads 10 files', done => {
    let files = [];
    let num = 10;
    for (let i = 0; i < num; i++){
      files.push(`file${i}.txt`);
    }

    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(num);
      done();
    });
  });

  it('reads 1 files', done => {
    let files = [];
    let num = 1;
    for (let i = 0; i < num; i++){
      files.push(`file${i}.txt`);
    }

    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(num);
      done();
    });
  });


});