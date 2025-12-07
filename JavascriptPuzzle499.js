/* What will be the output of the following code? */

let objkey = {};
let weakmap = new WeakMap();
weakmap.set(objkey, "I'm an object key!");

console.log(weakmap.get(objkey)); // "I'm an object key!"