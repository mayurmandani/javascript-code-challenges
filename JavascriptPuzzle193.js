/* What will be the output of the following code? */

const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x)); // 2
console.log(addFoo(y)); // 3