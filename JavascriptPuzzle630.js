// What is the output of the following code?

console.log(NaN === NaN);  // false

console.log(Object.is(NaN, NaN)); // true

console.log(+0 === -0); // true

console.log(Object.is(+0, -0));  // false

console.log(Number.isNaN("NaN"));  // false

console.log(isNaN("NaN")); // true