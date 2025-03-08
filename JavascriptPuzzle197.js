/* Write a function for the array using reduce method, expected output will be [1,2,3,4,5,6] */

let a = [1,2,[3,4,[5,6], 7, 8],9];


const flatten = arr => arr.reduce((a, v) => {
  v instanceof Array ? a.push(...flatten(v)) : a.push(v);
  return a;
}, []);

console.log(flatten(a));