/* What will be the output of the following code? */

const obj = {
  a: 1,
  b: 2,
  c: {
    a: 3,
    b: 4,
  },
};

const { a, b, c: { a: nestedA }, } = obj;

console.log(a, b, nestedA);