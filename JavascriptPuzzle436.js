/* Write a function that returns the number of keys in an object. 

const obj = { x: 10, y: 20 };
output = 2

*/

const obj = { x: 10, y: 20 };

function countKeys(obj) {
  let count = 0;
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

console.log(countKeys(obj)); // 2