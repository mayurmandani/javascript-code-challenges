/* What will be the output of the following code? */

let x = 1;

if(function f() {}) {
  x += typeof f;
}

console.log(x);  // 1undefined