/*
A deep copy is a copy of an object whose references are not the same as the original object. 
This means that if you change the value of a property in the deep copy, it will not change the value of the property in the original object. 
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

// Deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = "Surat";

console.log(person.address.city); // Origional object person address city value not changed and keep it Original object
console.log(deepCopy.address.city); // As Expected deepCopy object address city value changed to Surat 