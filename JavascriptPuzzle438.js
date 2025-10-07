/* Implement a function to check if an object has no properties. 

const obj = {}; // true

const obj = { a: 2 };  // false

*/

function isEmptyObject(obj) {
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

console.log(isEmptyObject({})); // true

console.log(isEmptyObject({a : 2})); // false