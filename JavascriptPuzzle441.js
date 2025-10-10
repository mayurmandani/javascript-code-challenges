/* Implement a function invertObject which takes input as { a: 1, b: 2, c: 3 } and return output as { '1': 'a', '2': 'b', '3': 'c' }. */

const obj = { a: 1, b: 2, c: 3 }


const invertObject = obj => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

console.log(invertObject(obj)); // { '1': 'a', '2': 'b', '3': 'c' }