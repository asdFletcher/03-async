'use strict';

jest.mock('fs');

const readerPromises = require('../../lib/reader-promises.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {

    let files = ['bad.txt','bad.txt','bad.txt'];

    expect.assertions(1);
    
    return readerPromises(files)
      .catch( (err) => {
        expect(err.message).toMatch('error');
      });
  });


  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    readerPromises(files)
      .then( (data) => {
        expect(data instanceof Array ).toBeTruthy();
        expect(data.length ).toBe(3);
        done();
      });
  });

});