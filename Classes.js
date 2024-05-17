// Classes serve as blueprints for creating objects with similar properties and behaviours.

// Class defination
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    // Method
    displayInfo() {
        console.log(`Make : ${this.make}, Model: ${this.model}`);
    }
}

// Object Instantiation
const myCar = new Car('Hyundai', 'Grand i10 Sportz');

myCar.displayInfo();