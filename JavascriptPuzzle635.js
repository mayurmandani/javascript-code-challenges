// What is the output of the following code?

function multiply(a, b) {
  return this.value * a * b;
}

const obj = { value: 2 };

console.log(multiply.call(obj, 3, 4));  // 24
console.log(multiply.apply(obj, [3, 4])); // 24

const fn = multiply.bind(obj, 3);
console.log(fn(4)); // 24
console.log(fn(5)); // 30