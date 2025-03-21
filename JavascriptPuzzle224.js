/* Write the Callback Function Example 

A Callback function is a function that is passed as an argument to another function and is executed after the completion of some operation.

Callbacks are commonly used to execute asynchronous functions such as data fetching, event handling, and other time-consuming operations.

*/ 

// callback function
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

// callback passed as an argument -- greetToGather is a function that is a callback 
function greetToGather() {
  console.log("Hello callback function");
}

// using the callback function

greet("JavaScript", greetToGather);

// Hello JavaScript
// Hello callback function

