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

//test
assertArraysEqual([1,2,3], [1,2,3]); //PASS
assertArraysEqual([1,2,3], [1,2]); //FAIL
assertArraysEqual([1,2,3], [1,2,'3']); //FAIL
assertArraysEqual([], []); //PASS