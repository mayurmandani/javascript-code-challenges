/* Adapter Pattern - Use case - When two incompatible interfaces need to work together. */

class OldSystem {
  request() {
    return "Old system response";
  }
}

class Adapter {
  constructor(oldSystem) {
    this.oldSystem = oldSystem;
  }

  newRequest() {
    return this.oldSystem.request();
  }
}

const oldSys = new OldSystem();

const adapted = new Adapter(oldSys);

console.log(adapted.newRequest()); // Old system response

// React Example - Integrating a Legacy Library. Imagine a legacy utility that doesn't return a promise but you want to use it with async/await in React.