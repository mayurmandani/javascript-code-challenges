/* Find the second largest number from the array */

const arr = [1, 1, 1, 1, 2, 2, 2, 8];

function secondLargestNumber(arr) {
  if(arr.length < 2) {
    return 'Array should contain at least two elements';
  }
  let uniqueNumbers = [...new Set(arr)];
  uniqueNumbers.sort((a, b) => b - a);
  if(uniqueNumbers.length < 2) {
    return 'Array should contain at least two unique elements';
  }
  return uniqueNumbers[1];
}

console.log(secondLargestNumber(arr));