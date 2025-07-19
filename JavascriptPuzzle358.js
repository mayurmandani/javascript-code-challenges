/* __proto__.prototypeExists on every objectExists only on constructor functions Points 
to the object's prototype Used to set what instances inherit when created with new */

function Car() {}

const myCar = new Car();

console.log(myCar.__proto__);

console.log(Car.prototype);

console.log(myCar.__proto__ === Car.prototype);  // true