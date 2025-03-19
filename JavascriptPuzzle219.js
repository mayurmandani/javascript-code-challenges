/* What will be the output of the following code? */

let numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((num) => num * 2);

const output = doubleNumbers.reduce((total, num) => total + num);

console.log(output); // 30