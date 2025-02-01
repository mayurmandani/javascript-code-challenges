/* Methods — Instance, Static, and Prototype Methods

Methods in JavaScript classes can be instance, static, or prototype methods. */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Instance method
  getArea() {
      return this.width * this.height;
  }

  // Static method
  static compareArea(rect1, rect2) {
    return rect1.getArea() - rect2.getArea();
  }
  
}

let rect1 = new Rectangle(5, 8);
let rect2 = new Rectangle(6, 6);

console.log(Rectangle.compareArea(rect1, rect2));