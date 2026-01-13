/* Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array. */

function sumOfPositveNumbers(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum;
}

const arr = [-1, 5,-4, 9, 7, -6, -1, 2];

console.log(sumOfPositveNumbers(arr)); // 23