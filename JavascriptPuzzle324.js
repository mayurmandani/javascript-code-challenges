/* Command Pattern - Use case - When you want to encapsulate requests as objects to execute later. */

class Light {
   turnOn() {
    console.log("Light is ON");
   }

   turnOff() {
    console.log("Light is OFF");
   }
}

class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

const light = new Light();

const turnOn = new LightOnCommand(light);

turnOn.execute(); // Light is ON

// React Example - Encapsulating Actions in Event Handlers. In React, you can encapsulate an action (command) inside a function and pass it as an event handler. 