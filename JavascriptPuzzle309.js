/* 
Using a WeakMap with Symbols as keys. Symbols are unique and immutable, making them perfect for use as keys. WeakMaps hold weak references to the keys, 
meaning that if the object used as a key is no longer referenced elsewhere, it can be garbage collected. 
This prevents memory leaks and unintended retention of objects in memory.
*/

const privateData = new WeakMap();

const obj = {label:'Private data'};

// Creating a unique Symbol as the key
const key = Symbol('privateKey');


privateData.set(key, obj) // Using the Symbol key to associate private data

console.log(privateData.get(key));  // { label: 'Private data' }
