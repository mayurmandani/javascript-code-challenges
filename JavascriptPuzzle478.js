/* What will be the output of the following code? */


// Encapsulating Code with an IIFE
(function () {
  console.log('IIFE executed!');
})();

// Using as a Callback
setTimeout(function () {
  console.log('Hello, world!');
}, 1000);

// In Higher-Order Functions
const numbers = [1, 2, 3];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); 


/* 
IIFE executed!
[2, 4, 6]
Hello, world!
*/
