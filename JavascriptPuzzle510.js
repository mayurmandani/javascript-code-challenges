/* Inheritance — extends and super - Create subclasses that inherit behavior from parent classes. */

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  info() {
    return `Brand: ${this.brand}`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // call parent constructor
    this.model = model;
  }
  info() {
    return `${super.info()}, Model: ${this.model}`; // override + reuse
  }
}

const c = new Car('Honda', 'City');

console.log(c.info()); // Brand: Honda, Model: City