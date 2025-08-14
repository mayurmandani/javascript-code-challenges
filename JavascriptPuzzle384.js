/* Write a function firstNonRepeatingChar to Find First Non-Repeating Character */

let str = "aabbcdd";

function firstNonRepeatingChar(str) {
  for(let char of str) {
    if(str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar(str)) // c