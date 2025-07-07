/* What will be the output of the below code: */

function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return {
    bar: "hello"
  };
}

console.log("::isEqual", foo1() === foo2());  // ::isEqual false