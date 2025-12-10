/* Write a function to reverse a given string without using built-in reverse() Method. 

input = "hello";
output = "olleh";

*/

function reverseString(str) { 
  if(str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}


console.log(reverseString("hello"));  // olleh