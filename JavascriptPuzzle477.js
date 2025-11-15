/* Write a JavaScript countFruits function using the Object.entries and reduce methods that takes an array = ['apple', 'mango', 'guava', 'apple', 'apple', 'guava'] 

and return output as array ['apple_3', 'mango_1', 'guava_2']  */

const arr = ['apple', 'mango', 'guava', 'apple', 'apple', 'guava'];

const countFruits = arr => Object.entries(arr.reduce((a, c) => (a[c] = (a[c] || 0 ) + 1, a), {})).map(([k, v]) => `${k}_${v}`);

const output = countFruits(arr);

console.log(output);   // [ 'apple_3', 'mango_1', 'guava_2' ]