/* Write a function that takes an object { a: { b: { c: 1 } } } and returns output as an object { 'a.b.c': 1 } 

let obj = { a: { b: { c: 1 } } }

output = { 'a.b.c': 1 }

*/


function flattenObject(obj, parentKey = '', result = {}) {
  for(const key in obj) {
    if(obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}


const obj = { a: { b: { c: 1 } } };

const output = flattenObject(obj);

console.log(output);  // { 'a.b.c': 1 }