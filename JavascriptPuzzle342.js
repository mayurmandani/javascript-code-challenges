/* Write a function to reverse a number 119 to 911  */

function reverseNumber(n) {
  const reversed = parseInt(n.toString().split('').reverse().join(''));
  return reversed;
}


console.log(reverseNumber(119)); // 911