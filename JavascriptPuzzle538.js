/* Write a function in JavaScript that returns the sum of two numbers without using the + operator. */

function add(a, b) {
  while(b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}

console.log(add(5, 7)); // 12