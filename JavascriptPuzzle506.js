/* Polymorphism — same interface, different behavior - Subclasses provide different implementations of the same method name. */

class Shape {
  area() {
      throw new Error('area() not implemented');
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.w = w;
    this.h = h;
  }
  area() {
    return this.w * this.h;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  area() {
    return Math.PI * this.r * this.r;
  }
}

const shapes = [new Rectangle(2, 3), new Circle(1)];

shapes.forEach(s => console.log(s.area()));  // 6  // 3.141592653589793