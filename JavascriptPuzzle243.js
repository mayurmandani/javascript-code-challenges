/* Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array. */

const arr = [1, -2, 3, 4, -5, 6];

function sumOfPositiveNumbers(numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

console.log(sumOfPositiveNumbers(arr)); // 14