/* Singleton Pattern - Use case - When we need only one instance of class across the entire application */

class President {
   constructor(name) {
    if(President.instance) {
      return President.instance;
    }
    this.name = name;
    President.instance = this;
   }

   getName() {
    return this.name;
   }
}


const president1 = new President("John");
const president2 = new President("Mayur");

console.log(president1.getName()); // John
console.log(president2.getName()); // John


console.log(president1 === president2); // true

// React Example - Global State with Context. In React, you often want a single global state. The Context API can serve as a singleton for state management.


