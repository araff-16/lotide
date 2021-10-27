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

const eqObjects = function(object1, object2) {
  let keyArray1 = Object.keys(object1);
  let keyArray2 = Object.keys(object2);
  
  if (keyArray1.length !== keyArray2.length) {
    return false;
  }
  for (let key of keyArray1) {
    
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;

};

const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect;

  if (eqObjects(actualObject, expectedObject)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actualObject)} !== ${inspect(expectedObject)}`);
  }
}
;


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab,abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,cd2); // => false