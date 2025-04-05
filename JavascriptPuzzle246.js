/* Write a function in JavaScript that converts a given string to title case. 

let str = "the quick brown fox";

output = The Quick Brown Fox

*/

let str = "the quick brown fox";

function toTitleCase(str) {
  return str.replace(/\b\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

console.log(toTitleCase(str)); // The Quick Brown Fox