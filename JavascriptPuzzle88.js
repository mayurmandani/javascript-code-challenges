/* Need to log only duplicate elements. 
let arr = [1,1,5,5,6,7,7,8,5,9] and output is [1, 5, 7, 5] */

let arr = [1,1,5,5,6,7,7,8,5,9];

const output = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log(output);

