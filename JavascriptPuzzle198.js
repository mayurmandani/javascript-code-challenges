/* Write a function for the flatten array using reduce method, expected output will be [0,1,2,3,4,5] */

let a = [[0, 1], [2, 3], [4, 5]];


const flatten = a.reduce((a, b) => a.concat(b), []);

console.log(flatten);