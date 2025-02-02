/* Getters and Setters - Getters and setters allow you to define Object Accessors (Computed Properties) */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    console.log(`${this.firstName}  ${this.lastName}`);
  }
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

let person = new Person('John', 'Doe');

console.log(person.fullName);

person.fullName = 'Steve Smith';

console.log(person.fullName);
