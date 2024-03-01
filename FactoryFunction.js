/* 
A factory function in JavaScript is a function that returns an object. It is a pattern used to create objects in a straightforward and organized manner.
factory function encapsulates the object creation process and returns a new object.
*/

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function () {
            return `Hello, my name is ${this.name} and I am ${this.age} years old`;
        }
    };
}

const person1 = createPerson('Mayur', '29');
console.log(person1.greet());
const person2 = createPerson('John', 30);
console.log(person2.greet());