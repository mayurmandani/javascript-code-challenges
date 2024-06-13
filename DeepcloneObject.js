/* Deep cloning ensures that nested objects are copied by value, not by reference, 
preventing unintended modifications to the original object. */

const obj = { a : 1, b : { c : 3 } };

const deepClone = JSON.parse(JSON.stringify(obj));

console.log(deepClone);