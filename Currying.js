// Currying is an advanced technique of working with functions.
// Currying is a transformation of functions that translates a function from callable as sum(a, b, c) into callable as sum(a)(b)(c).

/* function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(10,5,1)); */

// using the javascript arrow function
function sum(a) {
    return (b) => {
            return (c) => {
                return a + b + c;
            }
    }
}

console.log(sum(10)(5)(1));

// using the normal javascript function

function multiply(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    }
}

console.log(multiply(2)(3)(4));