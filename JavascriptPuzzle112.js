/* Write the example of Function declaration , Function expression and Arrow function */

// Function declaration 
console.log(add(2,3), "Function declaration");

function add(a, b) {
    return a + b;
}

// Function expression
const sum = function (a, b) {
    return a + b;
}

console.log(sum(3,4), "Function expression");


// Arrow function
const adding = (a, b) => a + b;

console.log(adding(4,5) , "Arrow function");