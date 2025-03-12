/* Sort the array of fruits based on the length of the fruit names in ascending order

const fruits = ["banana", "apple", "orange", "grape", "kiwi"]; 

*/

const fruits = ["banana", "apple", "orange", "grape", "kiwi"]; 

const sortbyLength = [...fruits].sort((a, b) => a.length - b.length);

console.log(sortbyLength);  // [ 'kiwi', 'apple', 'grape', 'banana', 'orange' ]