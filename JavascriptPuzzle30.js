/* Write a function in JavaScript to find the second-largest element in an array */

const array = [5, 2, 8, 9, 2, 4, 7];

const secondLargest = (arr) => [...new Set(arr)].sort((a, b) => b - a)[1];

const result = secondLargest(array);

console.log(result);
