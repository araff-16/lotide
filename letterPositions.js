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



const letterPositions = function(string) {
  let results = {};
  
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    
    if (char !== ' ') {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }

  return results;
};


//test
let result = letterPositions('lighthouse in the house');
console.log(result);

assertArraysEqual(result.e, [9,16,22]); //PASS
assertArraysEqual(result.n, [12]); //PASS
