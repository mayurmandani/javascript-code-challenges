/* Immutable Objects can not be altered once created. Any attempt to change their content results in a new object with the updated values. */

const immutableObject = Object.freeze({
  name: "Ravi",
  age: 30,
});

// Attempting to modify the object

immutableObject.age = 35; // this change won't affect the object due to Object.freeze(), which prevents any modifications to its properties.

console.log(immutableObject);  // { name: 'Ravi', age: 30 }

