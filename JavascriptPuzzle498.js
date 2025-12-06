/* What will be the output of the following code? */

const double = (x) => x * 2;
const addFive = (x) => x + 5;

const result = 10 | double | addFive; 

console.log(result); // 10
