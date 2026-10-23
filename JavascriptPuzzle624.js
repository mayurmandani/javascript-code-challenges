// What is the output of the following code?

const { a = 10, b = 20, c = 30 } = {
  a: null,
  b: undefined
};

console.log(a);  // null
console.log(b);  // 20
console.log(c);  // 30