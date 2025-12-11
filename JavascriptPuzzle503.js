/* Write a function to reverse a given string without using built-in reverse() Method. 

input = "hello";
output = "olleh";

*/

function reverseString(str) {
  let result = "";
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

const input = "hello";
const output = reverseString(input);

console.log(output); // olleh