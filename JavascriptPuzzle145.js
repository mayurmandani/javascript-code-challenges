/* Constructors and the new Keyword Constructors are special functions that create and initialize objects.*/

class Person {
  constructor(name, age) {
    this.name = name; 
    this.age = age;
  }
}

let person = new Person('Mayur', 25);

console.log(person);