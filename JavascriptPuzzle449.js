/* Write a function which takes object and remove false value from them 

const obj = { a: 1, b: 0, c: false, d: 'hello' };

const output = { a: 1, b: 0, d: 'hello' };

*/

function removeFalse(obj) {
  const result = {};
  for(const key in obj) {
    if(obj[key] !== false) {
      result[key] = obj[key];
    }
  }
  return result;
}

const obj = { a: 1, b: 0, c: false, d: 'hello' };

const output =  removeFalse(obj);

console.log(output); // { a: 1, b: 0, d: 'hello' }