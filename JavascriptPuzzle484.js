/* Find a Longest Word in a String "The quick brown fox jumped over the lazy dog" */

let str = "The quick brown fox jumped over the lazy dog";

function findLongestWord(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0];
}

const output = findLongestWord(str);

console.log(output);  // jumped