/* Maps can be of any data type, including objects or primitives values. 
Maps do not have a prototype chain, providing a clean slate for storing key-value pairs. */

const dynamicMap = new Map();

const key1 = { name: 'Mayur'};
const key2 = { name: 'Amit'};

dynamicMap.set(key1, 'FrontEnd Developer');
dynamicMap.set(key2, 'Java Developer');

console.log(dynamicMap.get(key1)); // FrontEnd Developer
console.log(dynamicMap.get(key2)); // Java Developer
