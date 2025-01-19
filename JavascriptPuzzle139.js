/* Classes: introduced in ES6, are a template for creating objects. */

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

let animal = new Animal('Dog');

animal.speak();