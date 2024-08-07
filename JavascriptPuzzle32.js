let x;
console.log(x); // undefined
console.log(typeof x); // undefined

let y = null;
console.log(y); // null
console.log(typeof y); // object

console.log(x == y); // true
console.log(x ===y); // false

console.log(5 + undefined);  // NaN
console.log(5 + null); // 5

console.log('Hari' + undefined); // Hariundefined
console.log('Hari' + null); // Harinull

console.log(false + undefined); // NaN
console.log(false + null); // 0

console.log(true + undefined); // NaN
console.log(true + null); // 1