/* What will be the output of the below code: */

var a = 1;

function foo() {
  var a = 2;
  console.log(a)
}

foo();
console.log(a);

// 2
// 1