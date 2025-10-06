/* Implement a function to check if an object has no properties. 

const obj = {}; // true

const obj = { a: 1 };  // false

*/

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({})); // true

console.log(isEmptyObject({ a: 1 })); // false