/* Implement Reducer Polyfills */

let array = [4, 5, 8, 6, 79];

// Defining a custom myReduce method on the Array prototype
Array.prototype.myReduce = function(callback, initialValue) {
     // Initialize accumulator with the Initial value
    let accumulator = initialValue;
   
    // Loop through each lement in the array
    for(let i = 0; i < this.length; i++) {
        // update the accumulator using the callback function
        accumulator = callback(accumulator, this[i], i);
    }
     // Return the final accumulator value
     return accumulator;
}

// Using the custom myReduce method to calculate the sum of all elements in the array

const output = array.myReduce((acc, curr) => {
    // Add the current element to the accmulator
    acc= acc + curr;
    // Return the updated accumulator value
    return acc;
}, 0); // start with an initial accumulator value of 0


console.log('result', output); // result 102