/* The call, apply, and bind methods in JavaScript are used to manipulate the this context of a function. 
They provide ways to control what this refers to when a function is invoked.
*/

// The call() method invokes a function directly with a specified this value and arguments provided individually. 

function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}

const person =  { name : 'Mayur' };

greet.call(person, 'Hello'); // Hello, Mayur

// The apply() method is similar to call(), but it accepts arguments as an array. 

function greeting(greet, punctuation) {
  console.log(greet + ', ' + this.name + punctuation);
}

const candidate = { name : 'John'};

greeting.apply(candidate, ['Hi', '!']);  // Hi, John!

// The bind() method creates a new function with the this value bound to the specified object. It doesn't invoke the function immediately but returns a new function that can be called later.

const greetMayur = greet.bind(person);

greetMayur("Hey"); // Hey, Mayur