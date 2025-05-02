/* A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered symbols, with values of any arbitrary JavaScript type, and which does not create strong references to its keys. 

*/

const wm1 = new WeakMap();
const wm2 = new WeakMap();

const obj1 = { };
const obj2 = function () {};

wm1.set(obj1, 37);
wm1.set(obj2, "azerty");
wm2.set(obj1, obj2);

console.log(wm1.get(obj1));  // 37 
console.log(wm1.get(obj2));  // azerty

console.log(wm2.get(obj1));  // [Function: obj2]
console.log(wm2.get(obj2));  // undefined


