/* What will be the output of the following code? */

const original = { a: 1, b: { c: 2 }};

const shallowCopy = {...original};

shallowCopy.a = 5;

console.log(shallowCopy);

console.log(original);