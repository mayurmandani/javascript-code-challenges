/* 
with() method changes the value of a given index in the array, returning a new array with the element at the given index replaced with the given value. 
The original array is not modified. This allows you to chain array methods while doing manipulations.
*/


const usernames = ['Mayur', 'Chetan', 'Ravi'];

const updatedUsernames = usernames.with(2, "Rohan");

console.log(updatedUsernames);  // [ 'Mayur', 'Chetan', 'Rohan' ]