/* Mutable Objects - Mutable objects in JavaScript can have their properties and values changed after they are created. This is the default behavior for most objects. */

let mutableObject = {
   name: "Ravi",
   age: 35,
};

// Modify the object
mutableObject.name = "Mayur";

// mutableObject allows direct modification of its properties, providing flexibility for dynamic updates.


console.log(mutableObject);  // { name: 'Mayur', age: 35 }