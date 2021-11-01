const assertEqual = require('../assertEqual');


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // Should Fail
assertEqual(1, 1); //Should Pass

assertEqual("Lighthouse Labs", "Lighthouse Labs"); // Should Pass
assertEqual(5, 1); //Should Fail
