// What is the output of the following code?

function Person(name){
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello ${this.name}`);
}

const user = new Person("Mayur");

user.sayHello();  // Hello Mayur