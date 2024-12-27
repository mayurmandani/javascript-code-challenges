/* Write the output of the below object */

const person = {
    name: 'Happy',
    age: 35,
};

// // Dot notation: is more popular and used due to it's simplicity.
console.log(person.name);  // Happy

// // Bracket notation:
console.log(person['name']); // Happy

console.log(Object.keys(person)); // [ 'name', 'age' ]
console.log(Object.values(person));  // [ 'Happy', 35 ]
console.log(Object.entries(person)); // [ [ 'name', 'Happy' ], [ 'age', 35 ] ]