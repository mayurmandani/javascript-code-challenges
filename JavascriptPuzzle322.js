/* Decorator Pattern - Use case - When we need to extend an object's functionality without modifying its structure. */

class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 2;
  }
}

let myCoffee = new Coffee();

console.log(myCoffee.cost()); // 5

myCoffee = new MilkDecorator(myCoffee);

console.log(myCoffee.cost());  // 7

// React Example - Higher-Order Components(HOC) as Decorators. In React, HOCs wrap components to add additional behavior.