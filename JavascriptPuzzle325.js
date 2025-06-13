/* Proxy Pattern - Use case - When you need to control access to an object. */

class RealCelebrity {
   greet() {
    console.log("Hello, I'm the real celebrity!");
   }
}

class CelebrityProxy {
  constructor() {
    this.realCelebrity = new RealCelebrity();
  }

  greet() {
    console.log("Cheking if you have access...");
    this.realCelebrity.greet();
  }

}

const proxy = new CelebrityProxy();

proxy.greet();

// Cheking if you have access...

// Hello, I'm the real celebrity!

// React Example: Higher-Order Component for Access Control. You can create a HOC that acts as a proxy to control access to a component.