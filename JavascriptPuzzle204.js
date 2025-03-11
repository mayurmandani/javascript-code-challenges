/* Sort the array of fruits in alphabetical order (default behavior)

const fruits = ["banana", "apple", "orange", "grape", "kiwi"]; 

*/

const fruits = ["banana", "apple", "orange", "grape", "kiwi"]; 

const alphabeticalOrder = [...fruits].sort();

console.log(alphabeticalOrder);  // [ 'apple', 'banana', 'grape', 'kiwi', 'orange' ]