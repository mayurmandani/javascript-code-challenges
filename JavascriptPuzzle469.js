/* What will be the output of the following code? */

let x = 230;

let t = 490;

let y = "Hello";

let z = undefined;

console.log(t || x); // 490

console.log(x || y); // 230

console.log(z || y);  // "Hello"

console.log(y && x); // 230

console.log(y && z); // undefined

