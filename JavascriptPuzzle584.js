/* Write a JavaScript function sumNumbers. It will find the sum of numbers without a using the for loop */

const numbers = [10, 2, 31, 4, 25];

function sumNumbers(numbers) {
  return numbers.reduce((sum ,num) => sum + num, 0);
}

console.log(sumNumbers(numbers)); // 72