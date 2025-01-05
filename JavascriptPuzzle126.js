/* Methods for Shallow Copy in JavaScript - shallow copy refers to a copy of an object where only the first level of the object is copied. */

// Shallow Copy an Object

// Using Object.assign()
const originalObject = { name: 'John', age: 30 };
const shallowCopy = Object.assign({}, originalObject);
console.log(shallowCopy);


// Using the spread operator (...)
const originObject = { name: 'Mayur', age: 31};
const shallowCopySpread = {...originObject};
console.log(shallowCopySpread);