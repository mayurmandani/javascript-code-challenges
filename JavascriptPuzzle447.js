/* Write a function that takes object and Find Keys by Value and return output as 1 → ['a','c'] 

const obj = { a: 1, b: 2, c: 1 };
output =  { '1': [ 'a', 'c' ], '2': [ 'b' ] }

*/

function findKeysByValue(obj) {
  const result = {};
  for(const [key, value] of Object.entries(obj)) {
    if(!result[value]) {
      result[value] = [];
    }
    result[value].push(key);
  }
  return result;
}

const obj = { a: 1, b: 2, c: 1 };

const output = findKeysByValue(obj);

console.log(output); // { '1': [ 'a', 'c' ], '2': [ 'b' ] }