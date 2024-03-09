/* write a function in JavaScript to create a countdown from a given number 
for an example countdown(10), expected output is [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] */

const countdown = n => Array.from({length : n}, (_, i) => n - i);

const output = countdown(10);

console.log(output);