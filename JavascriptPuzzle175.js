/*  If the given input is a number, you should return the factorial of that number. 
The factorial of a natural number n is the product of the positive integers less than or equal to n.
const n = 6;
output = 720
*/

const n = 6;

const output = new Array(n).fill(null).map((currentValue, index) => index + 1).reduce((accumulator, currentValue) => accumulator * currentValue);

console.log(output);