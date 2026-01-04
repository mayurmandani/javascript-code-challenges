// What is the output of the following code?

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2.push(4);

console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 1, 2, 3, 4]

