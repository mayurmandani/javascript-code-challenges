/* Square the value of every element in the array 
const arr = [1, 4, 7, 9, 3];
output = [1, 16, 49, 81, 9]
*/

const arr = [1, 4, 7, 9, 3];

const output = arr.map((num) => Math.pow(num, 2));

console.log(output);