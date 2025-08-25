/* A JavaScript Object is a data structure used in JavaScript to store key-value pairs.
Keys(called properties) can be strings or symbols, and values can be any valid JavaScript type (string, number, array, function, another object, etc).
They are mutable and allow methods(function inside objects).
Syntax allows unquoted keys if they are valid identifiers. */

let user = {
  name: "Mayur",
  age: 30,
  isDeveloper: true,
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log(user.greet()); // Hello Mayur