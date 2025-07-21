/* Inheritance Patterns - Constructor Function Inheritance */

function Parent() {
  this.type = "parent";
}

Parent.prototype.sayHello = function() {
  console.log("Hello from Parent");
}

function Child() {
  Parent.call(this); // Inherit properties
  this.role = "child";
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const c = new Child();

c.sayHello(); // Hello from Parent

console.log(c.type);  // parent