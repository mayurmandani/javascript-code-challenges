/* Implement a function mergeObjects to merge two object Without using Object.assign or spread operator */

function mergeObjects(obj1, obj2) {
  const result = {};
  // Copy properties from first object
  for(let key in obj1) {
    if(obj1.hasOwnProperty(key)) {
      result[key] = obj1[key];
    }
  }
  // Copy properties from second object ( will override duplicates)
  for(let key in obj2) {
    if(obj2.hasOwnProperty(key)) {
      result[key] = obj2[key];
    }
  }
  return result;   
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };


console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }