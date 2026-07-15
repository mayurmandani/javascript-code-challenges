/* Write a JavaScript function firstRepeatingCharacter which Find first repeating character 
(e.g., "success" → "c") */

function firstRepeatingCharacter(str) {
  const seen = new Set();
  for(const char of str) {
    if(seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return null;  // No repeating character found
}

console.log(firstRepeatingCharacter("success"));  // c
console.log(firstRepeatingCharacter("hello"));  // l
console.log(firstRepeatingCharacter("abc"));  // null
console.log(firstRepeatingCharacter("aabb")); // a
console.log(firstRepeatingCharacter("abca")); // a