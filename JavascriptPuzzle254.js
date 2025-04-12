/* 

Write a function capitalize in JavaScript that takes a given sentence return the Capitalize the first character of each word in sentence.  
let input = "the moon is so beautiful" and output = "The Moon Is So Beautiful".

*/

function capitalize(sentence) {
  return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

let input = "the moon is so beautiful";

let output = capitalize(input);

console.log(output); // "The Moon Is So Beautiful"