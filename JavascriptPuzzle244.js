/*  Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed. */

const str = "This is a string with vowels";

function removeVowels(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for(let i = 0; i < str.length; i++) {
    if(!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeVowels(str)); // Ths s  strng wth vwls