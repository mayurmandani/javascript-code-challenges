// What is the output of the following code?

console.log([] == false);  // true, This happens because of JavaScript's type coercion rules.

console.log(Boolean(""));  // false
console.log(Boolean(" ")); // true
console.log(Boolean(0));  // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true