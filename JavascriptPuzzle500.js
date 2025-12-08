/* What will be the output of the following code? */

let symbolKey = Symbol('a unique key');
let weakmap  = new WeakMap();
weakmap.set(symbolKey, "I'm a symbol key!");

console.log(weakmap.get(symbolKey)); // I'm a symbol key!