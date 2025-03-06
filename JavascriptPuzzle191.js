/* What will be the output of the following code? */

let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = {key: "another value" };

console.log(obj1.key);  // new value
console.log(obj2.key);  // another value
console.log(obj3.key);  // new value