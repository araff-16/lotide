const assertArraysEqual = require('../assertArraysEqual');

//test
assertArraysEqual([1,2,3], [1,2,3]); //PASS
assertArraysEqual([1,2,3], [1,2]); //FAIL
assertArraysEqual([1,2,3], [1,2,'3']); //FAIL
assertArraysEqual([], []); //PASS