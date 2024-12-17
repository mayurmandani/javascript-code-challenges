/* Write a program to reverse a string */

const str = "JavaScript is awesome";

let reverseString = "";

for(let i = 0; i < str.length; i++) {
    reverseString = str.charAt(i) + reverseString;
}

console.log(reverseString);