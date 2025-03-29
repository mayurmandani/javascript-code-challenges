/* What will be the output of the following code? */

const add = (a = 1, b = 2) => a + b;

console.log(add()); // 3
console.log(add(5)); // 7
console.log(add(undefined, 10)); // 11