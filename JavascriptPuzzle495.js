/* find the lastIndex from the array [1,2,3,2,1] and let lastIndex = 2; expected output is 3 */

let array = [1,2,3,2,1];
let lastIndex = 2;

let output = array.findLastIndex(x => x === lastIndex);

console.log(output);  // 3