/* What will be the output of the following code? */

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
}

var firstPerson = new Person("Lokesh Prajapati");

var secondPerson = new Person("Lucky");

console.log(firstPerson.greet === secondPerson.greet); // true