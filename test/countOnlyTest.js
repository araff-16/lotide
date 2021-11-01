const assert = require('chai').assert
const countOnly = require('../countOnly')


describe("#countOnly", () => {
  it('returns { Fang: 2, Jason: 1 } for [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] when searching { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }', () => {
    const firstNames = [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima","Fang", "Joe"]
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })
    assert.deepEqual(result, { Fang: 2, Jason: 1 });
  });
})


