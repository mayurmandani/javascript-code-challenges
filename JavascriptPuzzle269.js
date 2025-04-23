/* What will be the output of the following code? */

const arr = [1, 2, 3];

arr[10] = 99;

console.log(arr.length); // 11

console.log(arr); // [ 1, 2, 3, <7 empty items>, 99 ]