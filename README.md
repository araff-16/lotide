# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @araff-16/lotide`

**Require it:**

`const _ = require('@araff-16/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `map(array, callback)`: creates a new list provided an array and a callabck function specifying the         manipulation
* `tail(array)`: returns a new array with all elements of array except for the first 
* `takeUntil (array,callback)`: creates a new list using the elements in the provied list until the conditon in the callback function is satified
* `without (array,itemsToRemove)`: provide a new list with the items from itemsToRemove removed from array
* `middle (array)`: Returns the middle element of the array
* `letterPositions (string)`: return an object with letter as keys and values as a list of positons of each letter
* `head (array)`: Returns the first element in the array
* `flatten (array)`: takes an arrray with nested arrays an returns a single array
* `findByKeyValue (object,value)`: returns the object key belonging to the value provided
* `eqObjects (object1,object2)`: checks the equality of object1 and object2 
* `eqArrays (array1,array2)`: checks the equality of array1 and array2
* `countOnly (allItems,itemsToCount)`: takes an array of strings allItems and return a count of the items specified in itemsTOCount
* `countLetters (string)`: returns a count of all the letter in a string