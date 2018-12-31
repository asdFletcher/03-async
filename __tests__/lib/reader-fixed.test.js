'use strict';

jest.mock('fs');

const readerFixed = require('../../lib/reader-fixed.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {

    let files = ['bad.txt','bad.txt','bad.txt'];

    expect( ()=> {
      readerFixed(files, (err, data)=>{});
    }).toThrow();
  });


  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    readerFixed(files, (err,data) => {
      expect(err).toBeNull();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

});