/* Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. 
A Map object is iterated by key-value pairs and A Map's keys can be any value (including functions, objects, or any primitive) */

const contacts = new Map();
contacts.set('Hari', { phone: "213-555-1234", address: "123 N 1st Ave" });
console.log(contacts.has('Hari')); // true
console.log(contacts.get('Trump')); // undefined
contacts.set("Trump", { phone: "617-555-4321", address: "321 S 2nd St" });
console.log(contacts.get('Hari')); // { phone: '213-555-1234', address: '123 N 1st Ave' }
console.log(contacts.delete('Ravi')); // false
console.log(contacts.delete('Hari')); // true
console.log(contacts.size); // 1

/* Read-only Map objects have the property size, and the methods: entries(), forEach(), get(), has(), keys(), values(), and [Symbol.iterator]().
Writeable Map objects additionally have the methods: clear(), delete(), and set() */