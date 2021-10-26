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
// takes and array of arrays and combines them into a single array
const flatten = function(array) {
  let newArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let innerElement of element) {
        newArray.push(innerElement);
      }

    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

//test
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);// => [1, 2, 3, 4, 5, 6]
