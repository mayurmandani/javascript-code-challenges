/* write the function getGroupedAnagrams to Grouping the Anagram  

input = ["dell", "ledl", "abc", "cba", 'boo'];

output = { dell: [ 'dell', 'ledl' ], abc: [ 'abc', 'cba' ], boo: [ 'boo' ] }
*/

const words = ["dell", "ledl", "abc", "cba", 'boo'];


function sortStrChars(str) {
  if(!str) {
    return;
  }
  str = str.split('').sort().join('');
  return str;
}

function getGroupedAnagrams(words) {
  const anagrams = {};
  words.forEach((word) => {
      const sortedWord = sortStrChars(word);
      if(anagrams[sortedWord]) {
       return anagrams[sortedWord].push(word);
      } else {
        anagrams[sortedWord] = [word];
      }
  });
  return anagrams;
}

const groupedAnagrams = getGroupedAnagrams(words);

console.log(groupedAnagrams);

// groupedAnagrams String value display
for(const sortedWord in groupedAnagrams) {
  console.log(groupedAnagrams[sortedWord].toString());
}