/* What will be the output of the following code? */

let a = {
  x: 1,
  y: 2,
};

let b = a;
a.x = 5;

console.log(a);  // {x: 5, y: 2}
console.log(b);  // {x: 5, y: 2}