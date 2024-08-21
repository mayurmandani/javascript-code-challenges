/* Implement Map Polyfills */

let arr = [3 ,8, 7, 5, 9];

// Defining a custom myMap method on the Array prototype
Array.prototype.myMap = function(callback) {
    
    // Initialize an empty array to store mapped elements
    let newArray = [];

    // Loop through each element in the array
    for(let i = 0; i < this.length; i++) {
        
        // call the callback function on the current element and store the result
        const result = callback(this[i], i, this);

        // Add the result of the callback to the new array
        newArray.push(result);
    }
    // Return the new array with mapped elements
    return newArray;
}

// using the cutom myMap method to double each element in the array
const output =  arr.myMap((item) => item * 2);

console.log('output', output);
// output [ 6, 16, 14, 10, 18 ]