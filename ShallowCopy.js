/* 
A shallow copy is a copy of an object whose references are the same as the original object. 
This means that if you change the value of a property in the shallow copy, it will also change the value of the property in the original object.
*/

// Origional object
const person = {
    name: 'Mayur',
    age: 26,
    address: {
        city: 'Vadodara',
        country: 'India'
    } 
};

// Shallow Copy using Object.assign()
const shallowCopy = Object.assign({}, person);

shallowCopy.address.city = "Surat";

console.log(person.address.city); // Origional object person address city value changed
console.log(shallowCopy.address.city); 

