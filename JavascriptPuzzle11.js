console.log(0 == '0');  // true
console.log(1 == true); // true
console.log(null == undefined); // true

console.log(0 === '0'); // false
console.log(1 === false); // false
console.log(null === undefined); // false

console.log(Object.is(NaN, NaN)); // true, special handling for NaN

console.log(Object.is(-0, +0)); // false, distinguishes between -0 and +0