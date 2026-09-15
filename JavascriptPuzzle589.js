/* Write a JavaScript Closure example that preserves access to variables from its lexical scope. */

function outer() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };

}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3  