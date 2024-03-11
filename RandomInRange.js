/* write a function in JavaScript to generate a random integer between a specified minimum and maximum value (inclusive) */

const minValue = 5;
const maxValue = 8;

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1))

const output = randomInRange(minValue, maxValue);

console.log(output);

