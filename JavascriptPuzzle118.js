/* Methods for Shallow Copy in JavaScript */

// 1. Shallow Copy an Array

const originalArray = [1, 2, 3];

const shallowCopy = originalArray.slice();

console.log(shallowCopy, "Using the slice() method");

