/* class syntax (ES6) — modern and clearer Methods defined in the class body are on the prototype. */

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const a = new Animal('Dog');

a.speak();  // Dog makes a noise.
