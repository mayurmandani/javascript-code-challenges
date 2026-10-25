// What is the output of the following code?

const numbers = [1, 2, 3];

const result = numbers.map(async n => n * 2);

console.log(result);  // [ Promise { 2 }, Promise { 4 }, Promise { 6 } ]

Promise.all(result).then(values => {
  console.log(values);
});  // [ 2, 4, 6 ]