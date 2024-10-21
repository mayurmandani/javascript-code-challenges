/* The bind() method is used to create a new function with a specified this value and an initial
set of arguments. It allows you to set the context of a function permanently. */

const person = {
    name: "Mayur",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

const greetFn = person.greet;
const boundFn = greetFn.bind(person);

boundFn(); // Output: Hello, Mayur 