const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(string) {
  string = string.split(' ').join('');
  let results = {};

  for (let char of string) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

//test

const result = countLetters("lighthouse in the house");
console.log(result);

assertEqual(result["l"], 1);
assertEqual(result["g"], 1);
assertEqual(result["e"], 3);
assertEqual(result["z"], undefined);

