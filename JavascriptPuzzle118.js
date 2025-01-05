/* Methods for Shallow Copy in JavaScript - shallow copy refers to a copy of an array where only the first level of the array is copied. */

// 1. Shallow Copy an Array

// Using the slice() method:
const originalArray = [1, 2, 3];
const shallowCopy = originalArray.slice();
console.log(shallowCopy);

// Using the spread operator (...)
const origionArray = [1, 2, 4];
const shallowCopySpread = [...origionArray];
console.log(shallowCopySpread)

