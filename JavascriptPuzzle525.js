/* Write a function in JavaScript to determine the type of a value. 

The function getType takes a value as an argument and returns its type.
If the value is null, it returns null. Otherwise, it uses the constructor.name property to determine the type of the value.

*/

const getType = (val) => (val === null ? null : val?.constructor.name);

console.log(getType(42));  // Number
console.log(getType("Hello")); // String
console.log(getType(true)); // Boolean
console.log(getType([1, 2, 3])); // Array
console.log(getType({ name: "John", age: 25 }));  // Object
console.log(getType(null)); // null
console.log(getType(undefined));  // undefined
console.log(getType(function () {})); // Function