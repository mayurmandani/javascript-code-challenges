/* Write a function Group Anagrams which takes ["eat","tea","tan","ate","nat","bat"] and return output as [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ] */

function groupAnagrams(words) {
  const map = new Map();
  for(let word of words) {
    const sorted = word.split('').sort().join('');
    map.set(sorted, [...(map.get(sorted) || []), word]);
  }
  return Array.from(map.values());
}

const arr = ["eat","tea","tan","ate","nat","bat"];

const output = groupAnagrams(arr);

console.log(output); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]