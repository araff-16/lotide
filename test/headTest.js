const assertEqual = require('../assertEqual');
const head = require('../head')



assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");