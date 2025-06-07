/* Factory Pattern - Use case - When we need to create objects without specifying their exact class. */

class FoodFactory {
   static createFood(type) {
    if(type === "pizza") {
      return new Pizza();
    } else if (type === "burger") {
      return new Burger();
    }
   }
}

class Pizza {
  name = "Pizza";
}

class Burger {
  name = "Burger";
}

const myLaunch = FoodFactory.createFood("pizza");

console.log(myLaunch.name) // Pizza

// React Example - Component Factory. In React, we can create a factory that returns different components based on a prop.