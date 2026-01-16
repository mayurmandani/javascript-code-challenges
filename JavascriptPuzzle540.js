/* Write a function in JavaScript that converts a given string to title case. */

function toTitleCase(str) {
  return str.replace(/\b\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

console.log(toTitleCase("the quick brown fox"));  // The Quick Brown Fox