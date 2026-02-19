/* Write a function rotateLeft that receives an array of numbers and Rotate an array to the left 1 position */

const arr = [1, 2, 3];

function rotateLeft(arr) {
  const first = arr.shift();
  return arr.push(first);
}

console.log(rotateLeft(arr)); // 3