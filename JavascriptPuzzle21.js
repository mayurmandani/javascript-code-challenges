/* Creating a Set Object to store unique numbers */

const uniqueNumbers = new Set();
uniqueNumbers.add(5);
uniqueNumbers.add(8);
uniqueNumbers.add(10);
uniqueNumbers.add(5);  // Ignore duplicate values

console.log(uniqueNumbers, "uniqueNumbers");

// Check size
console.log(uniqueNumbers.size);

// Check element existence
console.log(uniqueNumbers.has(10));

// delete element
uniqueNumbers.delete(10);

console.log(uniqueNumbers.size);