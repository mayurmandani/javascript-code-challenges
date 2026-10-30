// What is the output of the following code?

const obj = {};

const a = { id: 1 };
const b = { id: 2 };

obj[a] = "first";
obj[b] = "second";
obj[1] = "number";
obj["1"] = "string";

console.log(obj[a]);  // second
console.log(obj[b]);  // second
console.log(obj[1]);  // second
console.log(Object.keys(obj));  // [ '1', '[object Object]' ]