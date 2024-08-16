/* Example of Prototypal Inheritance */

// Parent object constructor
function Animal(name) {
    this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function() {
    console.log('The ' + this.constructor.name + ' makes a sound.');
};

// Child object constructor
function Dog(name) {
    Animal.call(this, name) // call the parent constructor.
}

// set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// add a method to the child object's prototype.
Dog.prototype.bark = function() {
    console.log('Woof!');
};

// Create a new instance of Dog.
const animal = new Dog('Bolt');

// Call method on the child object.
console.log(animal.name); // 'Bolt'
animal.makeSound(); // 'The Dog makes a sound.'
animal.bark(); // 'Woof!'