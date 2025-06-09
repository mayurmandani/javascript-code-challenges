/* Strategy Pattern - Use case - When we need to switch between different behaviors dynamically. */

class BusStrategy {
  travel() {
    console.log("Traveling by bus...");
  }
}

class CarStrategy {
  travel() {
    console.log("Traveling by car...");
  }
}

class BicycleStrategy {
  travel() {
    console.log("Traveling by bicycle...");
  }
}

class TravelContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    this.strategy.travel();
  }
}

const travel = new TravelContext();

travel.setStrategy(new BusStrategy());

travel.executeStrategy(); // Traveling by bus...

travel.setStrategy(new BicycleStrategy());

travel.executeStrategy(); // Traveling by bicycle...


// React Example - Dynamic Rendering Based on strategy. In a React application, we can swap out different components(strategies) based on state.