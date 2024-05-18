// Inheritance allows classes to inherit properties and methods from other classes, promoting code reuse.

// Parent class
class Vehicle {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }
        displayInfo() {
            console.log(`Make: ${this.make}, Model: ${this.model}`);
        }
 }

 // Child class inheriting from Vehicle
 class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model); // call parent class constructor
        this.year = year; 
    }

    displayYear() {
        console.log(`Year: ${this.year}`);
    }
 }

 // Object instantiation

 const myCar = new Car('Hyundai', 'Grand i10 Sportz', 2021);

 myCar.displayInfo();
 myCar.displayYear();