/* Remove the space from the string and return new string*/

let str = ("   This is     a beatiful       day     .");

let newStr = str.replace(/\s+/g, ' ');

console.log(newStr);