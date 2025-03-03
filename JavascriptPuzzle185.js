/* Write the ES6: Class and using through constructor example */

class Interview {
  constructor(name, experience) {
    this.name = name;
    this.experience = experience;
  }

  startInterview() {
    console.log(`candidate name is ${this.name} and have experience on ${this.experience} `);
  }

}

const panel = new Interview("Mayur", "10 years");

panel.startInterview();