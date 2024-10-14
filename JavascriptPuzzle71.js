/* What is the difference between hasOwnProperty() and the in operator? */

const person = { name: 'John' };

console.log(person.hasOwnProperty('name')); // true
// hasOwnProperty checks if the object itself has a property

console.log('name' in person); // true
// in operator checks both the object and its prototype chain.

console.log(person.hasOwnProperty('toString')); // false
console.log('toString' in person) // true

