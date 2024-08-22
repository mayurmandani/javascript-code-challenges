/* Implement Filter Polyfills */

let arr = [3 ,8, 7, 6, 9];

// Defining a custom myFilter method on the Array prototype
Array.prototype.myFilter = function(callback) {
    // Intialize an empty array to store filtered element
    let filteredArray = [];
    
    // Looping each element in the array
    for(let i = 0; i < this.length; i++) {

        // Check if the callback returns true for the current element
        if(callback(this[i], i, this)) {

            // Add the element to the filtered array
            filteredArray.push(this[i]);
        }
    }
     // Return the filtered array
     return filteredArray;
}

// Using the custom my filter method to filter even numbers from the array
const output = arr.myFilter((item) => item % 2 === 0);

console.log('output', output);
// output [ 8, 6 ]