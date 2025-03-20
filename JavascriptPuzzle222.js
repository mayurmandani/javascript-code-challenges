/* Write the Higher-Order Function Example 

A Higher-order function takes one or more functions as arguments and returns as a result. 
A Higher-order function enables the creation of more abstract and reusable code.

*/


// A Higher-Order Function
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  }
}

// creating a new function as Higher Order Function

const result = multiplyBy(5);

// using the new function
console.log(result(10));  // 50