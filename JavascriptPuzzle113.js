/* What is the difference between synchronous and asynchronous programming in JavaScript? */


// Synchronous programming executes code in a sequential manner, where each operation must complete before the next one starts.

// Synchronous example
console.log('First');
console.log('Second');

/* Asynchronous programming allows for operations to be executed independently of the main program flow, 
enabling code to run in the background while other operations continue. */

// Asynchronous example
setTimeout(() => {
    console.log('Asynchronous operation');
  }, 1000);

// Synchronous example
console.log('Third');  