/* Write a Function to Count Digits  */

function countDigit(num) {
  return num.toString().replace('-', '').length;
}

console.log(countDigit(911)); // 3