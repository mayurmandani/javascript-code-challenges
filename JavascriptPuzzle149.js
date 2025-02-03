/* Inheritance with extends and super
The extends keyword is used in class declarations to create a class as a child of another class.  */

class Shape {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} moved`);
  }
}

class Circle extends Shape {
  constructor(radius) {
  super('Circle');
  this.radius = radius;
  }
}

let myCircle = new Circle(5);

myCircle.move(); // Circle moved

console.log(myCircle.radius); // 5 