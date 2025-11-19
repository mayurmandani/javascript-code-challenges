/* Find First Non-Repeating Character from string 
let str = "aabbcdd"  and output is "c" */

let str = "aabbcdd";

function firstNonRepeatingChar(str) {
  for(let char of str) {
    if(str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return null;
}

const output = firstNonRepeatingChar(str);

console.log(output);  // c

