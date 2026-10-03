// What is the output of the following code?

function User(name) {
  this.name = name;
}

const user = new User("Mayur");

console.log(user instanceof User);  // true