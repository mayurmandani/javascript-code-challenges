/* Sort the array of fruits in ascending order by the second character of each fruit name

const fruits = ["banana", "apple", "orange", "grape", "kiwi"]; 

*/

const fruits = ["banana", "apple", "orange", "grape", "kiwi"]; 

const soryBySecondChar = [...fruits].sort((a, b) => a[1].localeCompare(b[1]));

console.log(soryBySecondChar); // [ 'banana', 'kiwi', 'apple', 'orange', 'grape' ]