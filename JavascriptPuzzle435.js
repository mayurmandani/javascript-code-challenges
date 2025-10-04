/* Write a function that returns the number of keys in an object. 

Using the Object.keys()

const obj = { a: 1, b: 2, c: 3 };
output = 3

*/

const obj = { a: 1, b: 2, c: 3 };

function countKeys(obj) {
  return Object.keys(obj).length;
}

console.log(countKeys(obj)); // 3