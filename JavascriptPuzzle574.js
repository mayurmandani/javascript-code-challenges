/* Write a function rotateRight that receives an array of numbers and Rotate an array to the right 1 position */

const arr = [1, 2, 3];

function rotateRight(arr) {
  const last = arr.pop();
  return arr.unshift(last);
}

console.log(rotateRight(arr)); // 3