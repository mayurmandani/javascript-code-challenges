/* Implement a function invertObject which takes input as { a: 1, b: 2, c: 3 } and return output as { '1': 'a', '2': 'b', '3': 'c' }. */

const obj = { a: 1, b: 2, c: 3 }

function invertObject(obj) {
  const result = {};
  for(const key in obj) {
    if(obj.hasOwnProperty(key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}

console.log(invertObject(obj)); // { '1': 'a', '2': 'b', '3': 'c' }