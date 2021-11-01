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

module.exports = letterPositions;

//test
/*
let result = letterPositions('lighthouse in the house');
console.log(result);

assertArraysEqual(result.e, [9,16,22]); //PASS
assertArraysEqual(result.n, [12]); //PASS
*/