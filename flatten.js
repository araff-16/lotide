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

module.exports = flatten;

//test
//console.log((flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));// => [1, 2, 3, 4, 5, 6]
