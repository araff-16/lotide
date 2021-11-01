const assert = require('chai').assert
const tail = require('../tail')


describe("#tail", () => {
  it("Ensures we get back ['Lighthouse', 'Labs'] for  ['Hello', 'Lighthouse', 'Labs']", () => {
    result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
  it("original array should still have 3 elements! for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length,3);
  });
});


//Original Testing
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!