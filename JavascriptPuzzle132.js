/* Write a code to remove all the vowels from a given string */

const str = "I love JavaScript";

const newStr = str.replace(/[aeiou]/gi, "");

console.log(newStr);