/* Write the function to convert input array into below output 

let input = ['apple', 'mango', 'guava', 'apple', 'apple', 'guava'];

output = {apple: 3, mango: 1, gauva: 2 }

*/

let input = ['apple', 'mango', 'guava', 'apple', 'apple', 'guava'];

const output = input.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0 ) + 1;
  return acc;
}, {});


console.log(output);