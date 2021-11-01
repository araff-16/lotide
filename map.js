const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map

//Tests
/*
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(map(words, word => word[0]),['g','c','t','m','t']);

const nums = [1,2,3,4,5,6,7];
assertArraysEqual(map(nums, num => num * 2),[2,4,6,8,10,12,14]);
assertArraysEqual(map(nums, num => num),[1,2,3,4,5,6,7]);
*/

