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

module.exports = middle;