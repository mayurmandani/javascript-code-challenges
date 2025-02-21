/* Do the sum of every positive element from the array */

const arr = [1, -4, 12, 0, -3, 29, -150];

const result = arr.filter((num) => num > 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(result);