const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actualArray, expectedArray) {

  if (eqArrays(actualArray, expectedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }

};

//Returns the middle element(s) of the array
const middle = function(array) {

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) { //get the two middle elements for even
    let smallIdx = Math.floor((array.length - 1) / 2);
    let largeIdx = Math.ceil((array.length - 1) / 2);
    return [array [smallIdx], array [largeIdx]];
  } else {
    let midIdx = (array.length - 1) / 2;
    return [array[midIdx]];
  }
};

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