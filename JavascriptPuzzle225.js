/* What will be the output of the following code? */

let arr = [1, 2, 3];

// The slice() method does not change the original array.
let result = arr.slice(0, 1);

console.log(result, "result using slice"); // [1]
console.log(arr, "original array"); // [ 1, 2, 3 ]


// The splice() method overwrites the original array and adds and/or removes array elements.
let result1 = arr.splice(1, 1, 4, 5);

console.log(result1, "result using splice"); // [ 2 ]
console.log(arr, "original array"); // [ 1, 4, 5, 3 ]