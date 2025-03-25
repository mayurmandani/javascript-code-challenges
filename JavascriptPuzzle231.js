/* The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable.
A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability 
and configurability cannot be changed, and its prototype cannot be re-assigned. 
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

Object.seal(obj);

obj.name = "Niti";  // Changing property values on a sealed object works
obj.age = 36;   // Changing property values on a sealed object works
obj.lastName = "Mandani";  // Adding the new property values on a sealed object not works
obj.address.city = "Delhi";  // attributes of child object can be modified on a sealed object works
delete obj.gender; // we can't delete the property on a sealed object

console.log(obj.name); 
console.log(obj.address.city);
console.log(obj);