/* What will be the output of the below code: */

const obj = { a: 1, b: { c: 2} };

const copy = {...obj};

copy.b.c = 3;

console.log(obj.b.c); // 3