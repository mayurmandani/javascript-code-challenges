/* write a function in JavaScript to capitalize the first letter of each word in a given sentence 
const input = 'hello, i am frontend developer'; expected output is "Hello, I Am Frontend Developer";
*/ 

const input = 'hello, i am frontend developer';

const capitalizeWords = (sentence) => sentence.replace(/\b\w/g, char => char.toUpperCase());

const output = capitalizeWords(input);

console.log(output);