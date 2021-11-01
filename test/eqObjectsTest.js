const assert = require('chai').assert
const eqObjects = require('../eqObjects')


describe("#eqObjects", () => {
  it('returns true for { a: "1", b: "2" }, { b: "2", a: "1" }', () => {
    assert.isTrue(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }));
  });
  it('returns false for { a: "1", b: "2" } { a: "1", b: "2", c: "3" }', () => {
    assert.isFalse(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" })); 
  });
  it('returns true for { c: "1", d: ["2", 3], q: "5", r: 6 } { d: ["2", 3], c: "1", q:"5", r: 6  }', () => {
    assert.isTrue(eqObjects({ c: "1", d: ["2", 3], q: "5", r: 6 }, { d: ["2", 3], c: "1", q:"5", r: 6  })); 
  });
  it('returns false for { c: "1", d: ["2", 3], q: "5", r: 6 } { c: "1", d: ["2", 3, 4] }', () => {
    assert.isFalse(eqObjects({ c: "1", d: ["2", 3], q: "5", r: 6 },{ c: "1", d: ["2", 3, 4] })); 
  });
});
//testing
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log((eqObjects(ab, ba),true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3], q: '5', r: 6 };
const dc = { d: ["2", 3], c: "1", q:'5', r: 6  };
console.log((eqObjects(cd, dc),true)); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2),false); // => false
*/