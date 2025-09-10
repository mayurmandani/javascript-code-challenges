/* Write a function that merges any number of arrays into a single array with only unique values without using the flat() methods */

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [4, 5];

function mergeUnique() {
  return Array.from(new Set([].concat.apply([], arguments)));
}

console.log(mergeUnique(arr1, arr2, arr3)); // [ 1, 2, 3, 4, 5 ]