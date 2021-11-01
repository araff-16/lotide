// Receives two arrays.The second array specifes items to remove from the first array
// A new arry is returned with the items removed
const without = function(array, itemsToRemove) {
  let newArray = array.filter(element => !(itemsToRemove.includes(element)));
  return newArray;
};

module.exports = without;

//tests
/*
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/