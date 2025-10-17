/* Write a function which takes object and remove false value from them like false, 0, '', null, undefined, NaN  

const obj = { a: 1, b: 0, c: false, d: 'hello' };

const output = { a: 1, d: 'hello' }

*/

function removeFalsy(obj) {
  const result = {};
  for(const key in obj) {
    if(obj[key]) {
      result[key] = obj[key];
    }
  }
  return result;
}

const obj = { a: 1, b: 0, c: false, d: 'hello' };

const output = removeFalsy(obj);

console.log(output); // { a: 1, d: 'hello' }