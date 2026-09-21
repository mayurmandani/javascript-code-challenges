/*  splice() method is a built-in function used to modify the contents of an array by removing, replacing, or adding elements in place. splice() is a destructive operation, meaning it change the original array or string */

const arr = [1, 2, 3, 4];


console.log(arr.splice(1, 2)); // [2, 3]

console.log(arr); // [ 1, 4 ]