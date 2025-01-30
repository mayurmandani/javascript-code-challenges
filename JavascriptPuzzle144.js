/* Abstraction involves creating simple models representing complex real-world objects. */

class Vehical {
  startEngine() {
    console.log('Engine started');
  }
  stopEngine() {
    console.log('Engine stopped');
  }
}

class Car extends Vehical {
  startEngine() {
    console.log('Car engine started');
  }
}

let myCar = new Car();

myCar.startEngine();