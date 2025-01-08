/* Write a code to truncate a string to a certain number of words */

const str = "JavaScript is simple but not easy to master";

const wordLimit = 3;

function truncateStr(str) {
  return str.split(" ").slice(0, wordLimit).join(" ");
}

console.log(truncateStr(str)); // JavaScript is simple