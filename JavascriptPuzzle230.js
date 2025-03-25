/*  The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, 
or value cannot be changed, and the object's prototype cannot be re-assigned.

Freezing an object is the highest integrity level that JavaScript provides.
*/

const obj = {
    name: "Mayur",
    age: 35,
    gender: "male",
    address: {
      street: "A Block",
      city: "Vadodara",
    },
};

Object.freeze(obj);

obj.name = "Niti";
obj.address.city = "Delhi";  // attributes of child object can be modified
delete obj.gender;

console.log(obj.name);
console.log(obj.address.city);
console.log(obj);