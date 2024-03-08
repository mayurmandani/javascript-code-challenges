/* write a function in JavaScript to calculate the cumulative sum of an array.
let arr = [10, 15, 20, 25, 30] expected output is [10, 25, 45, 70, 100] */

let arr = [10, 15, 20, 25, 30];

const cumulativeSum = arr => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], []);

console.log(cumulativeSum(arr));