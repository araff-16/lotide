const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArray, expectedArray) {

  if (eqArrays(actualArray, expectedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }

};

module.exports = assertArraysEqual;