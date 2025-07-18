/* Prototypes in JavaScript */

const person = {
  greet() {
    console.log(`Hello ${this.name}`);
  }
};

const john = Object.create(person);

john.name = "John";

john.greet(); 