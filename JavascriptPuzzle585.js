/* Write a JavaScript function sumNumbers using Recursion. It will find the sum of numbers  */

const numbers = [10, 2, 31, 4, 25];

function sumNumbers(numbers) {
  if(numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumNumbers(numbers.slice(1));
};

console.log(sumNumbers(numbers)); // 72