const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


//tests
//ODD
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

//even
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

//Less than two
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);