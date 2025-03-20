/* Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the even numbers.

Approach : Using recursion and conditional statement

*/

let numberArray = [3, 5, 6, 8, 4];

function findEvenNumbersRecursive(numberArray) {
  if(numberArray.length === 0) {
    return [];
  }

  const firstNumber = numberArray[0];
  const remainingNumbers = numberArray.slice(1);

  if(firstNumber % 2 === 0) {
    return [firstNumber].concat(findEvenNumbersRecursive(remainingNumbers));
  } else {
    return findEvenNumbersRecursive(remainingNumbers);
  }

}

console.log(findEvenNumbersRecursive(numberArray)); // [ 6, 8, 4 ]