'use strict';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const solution = require('../solution');

suite('Testing solution js file.', () => {



  let plaintext = '123456';
  let hash = solution.hash(plaintext);
  let compareMatch = solution.compare(plaintext,hash);
  let compareNoMatch = solution.compare('no match', hash);

  test('Hashing works', done => {
    assert.notEqual(hash,undefined);
    assert.notEqual(plaintext,hash);
    done();
  });

  test('Comparison works', done => {
    assert.notEqual(compareMatch,undefined);
    assert.notEqual(compareNoMatch,undefined);
    assert.isTrue(compareMatch);
    assert.isFalse(compareNoMatch);
    done();
  });

});
