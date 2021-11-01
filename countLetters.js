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

module.exports = countLetters;


