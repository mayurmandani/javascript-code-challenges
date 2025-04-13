/* 
Chunk an Array - Divide an array into smaller chunks of a specified size. 

let array = [1, 2, 3, 4, 5, 6, 7];
let size = 3;
output = [[1, 2, 3], [4, 5, 6], [7]];
*/

function chunk(array, size) {
  let output = [];
  for(let i = 0; i < array.length; i += size) {
    output.push(array.slice(i, i + size));
  }
  return output;
}


let array = [1, 2, 3, 4, 5, 6, 7];

let output = chunk(array, 3);

console.log(output); // [[1, 2, 3], [4, 5, 6], [7]];