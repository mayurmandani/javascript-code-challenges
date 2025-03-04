/* What will be the output of the following code? */

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return "Hello, my name is " + this.name;
};

let person1 = new Person("Mayur Mandani");
let person2 = new Person("Ravi Negi");

console.log(person1.greet === person2.greet);  // true