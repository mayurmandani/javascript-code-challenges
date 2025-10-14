/* Implement a function deepMerge to merge two object Without using Object.assign or spread operator */

function deepMerge(obj1, obj2) {
  const result = {};

  for(let key in obj1) {
    if(obj1.hasOwnProperty(key)) {
      result[key] = obj1[key];
    }
  }

  for(let key in obj2) {
    if(obj2.hasOwnProperty(key)) {
      if(typeof obj2[key] === 'object' && !Array.isArray(obj2[key]) && obj2[key] !== null) {
        result[key] = deepMerge(result[key] || {}, obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
}

const obj1 = { a: 1, b: { x : 10 } };
const obj2 = { b: { y: 20 }, c: 3 };

console.log(deepMerge(obj1, obj2)); // { a: 1, b: { x: 10, y: 20 }, c: 3 }