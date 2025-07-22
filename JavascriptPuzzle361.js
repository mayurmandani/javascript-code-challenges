/* Inheritance Patterns - ES6 Class Inheritance */

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
}

const tesla = new Car("Tesla", "Model S");

tesla.drive();  // Tesla is driving