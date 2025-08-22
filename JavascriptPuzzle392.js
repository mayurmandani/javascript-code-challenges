/* Group Anagrams */

const words = ["eat","tea","tan","ate","nat","bat"];

function groupAnagrams(words) {
  const map = new Map();
  for(let word of words) {
    const sorted = word.split('').sort().join('');
    map.set(sorted, [...(map.get(sorted)|| []), word]);
  }
  return Array.from(map.values());
}

console.log(groupAnagrams(words));

// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]