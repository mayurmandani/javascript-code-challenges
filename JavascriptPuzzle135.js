/* How can you detect NaN in JavaScript? 
NaN is a special numeric value in JavaScript that indicates "Not-a-Number." we can use Number.isNaN() or isNaN() */

console.log(Number.isNaN(NaN));  // true
console.log(Number.isNaN("Hello")); // false
console.log(Number.isNaN(undefined)); // false