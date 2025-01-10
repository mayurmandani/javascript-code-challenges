/* What is the Output of below javascript code ? */

const a = {};

const b = { key: 100 };
const c = { key : 200 };

a[b] = 100;
a[c] = 200;


console.log(a[b]); // 200