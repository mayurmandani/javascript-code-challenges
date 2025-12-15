/* Composition over inheritance - Prefer composing objects(has-a) instead of deep class hierarchies(is- a) */

const canDrive = {
  drive() {
    console.log(`${this.name} is driving`);
  }
 }

 function createDriver(name) {
  return Object.assign({ name }, canDrive);
 }

 const driver = createDriver('Ravi');

 driver.drive(); // "Ravi is driving"