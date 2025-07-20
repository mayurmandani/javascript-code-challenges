/* 

When we call a function with new, four things happen 

A new empty object is created
Then function's prototype is assigned to the new object's __proto__
The constructor function runs with this bound to the new object
The object is returned(unless the constructor explicitly returns another object).

*/

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
}

const dog = new Animal("Dog");

dog.speak();  // Dog makes a noise.