/* What will be the output of the below code: */

function foo() {
  let a = b = 0;
  return a++;
}

foo();

console.log("a", typeof a);  // a undefined
console.log("b", typeof b);  // b number