// What is the output of the following code?

const numbers = [5, 2, 8, 1];

const sorted = numbers.toSorted((a, b) => a - b);

console.log(numbers); // [ 5, 2, 8, 1 ]
console.log(sorted);  // [ 1, 2, 5, 8 ]