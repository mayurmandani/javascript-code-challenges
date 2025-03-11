/* Sort the array of fruits in descending alphabetical order

const fruits = ["banana", "apple", "orange", "grape", "kiwi"]; 

*/

const fruits = ["banana", "apple", "orange", "grape", "kiwi"]; 

const descendingOrder = [...fruits].sort((a, b) => b.localeCompare(a));

console.log(descendingOrder);  // [ 'orange', 'kiwi', 'grape', 'banana', 'apple' ]