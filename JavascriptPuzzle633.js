// What is the output of the following code?

const numbers = [1, 2, 3];

const result = numbers
  .push(4)
  .toString()
  .split("");

console.log(numbers);   // [ 1, 2, 3, 4 ]
console.log(result);  // [ '4' ]
console.log(numbers.length);  // 4