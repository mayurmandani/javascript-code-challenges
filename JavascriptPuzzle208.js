/* Write the Javascript function To Check Whether Two Strings Are Anagram Of Each Other */

function Anagram(str1, str2) {
  let firstString = str1.split("").sort().join("");
  let secondString = str2.split("").sort().join("");
  return firstString === secondString ? `${str1} and ${str2} are Anagram of Each other` : `${str1} and ${str2} are not Anagram of Each other`;
}


console.log(Anagram("silent", "listen"));

console.log(Anagram("modi", "monu"));