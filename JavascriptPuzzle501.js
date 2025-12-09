/* Using a constructor function to create many objects sharing the same prototype methods. */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Methods on Person.prototype are shared — not re-created per instance saving memory and enabling method lookup via the prototype chain.
Person.prototype.greet = function() {
  console.log(`Hi, I'am ${this.name}.`);
};

const p = new Person("Mayur", 30);

p.greet(); // Hi, I'am Mayur.