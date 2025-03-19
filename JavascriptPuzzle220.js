/* Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the even numbers.

Approach : Using a loop and conditional statement

*/

let numberArray = [3, 5, 6, 8, 4];

function findEvenNumbers(numberArray) {
  let evenNumbers = [];

  for(let i = 0; i < numberArray.length; i++) {
    if(numberArray[i] % 2 === 0) {
      evenNumbers.push(numberArray[i]);
    }
  }

  return evenNumbers;
}

console.log(findEvenNumbers(numberArray)); // [6, 8, 4]