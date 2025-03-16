/* What will be the output of the following code? */

function foo() {
  let x = 1;

  function bar() {
    let y = 2;
    console.log(x + y);
  }
  bar();
}

foo(); // 3