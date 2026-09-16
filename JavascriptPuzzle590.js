/* Write a Class Inheritance example in JavaScript  */

class Parent {
  say() {
    console.log("Parent");
  }
}

class Child extends Parent {
  speak() {
    console.log("Child is craying");
  }
}

const obj = new Child();

obj.say(); // Parent
