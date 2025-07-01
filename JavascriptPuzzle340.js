/* Check Armstrong Number */

function isArmstrong(n) {
  const digits = n.toString().split('');
  const sum = digits.reduce((acc, digit) => acc + Math.pow(+digit, digit.length), 0);
  return (sum === n) ? "Yes, it is" : "It is not";
}

console.log(isArmstrong(153))  // It is not

console.log(isArmstrong(9)) // Yes, it is