/* Given a string s, find the length of the longest substring length without duplicate characters.

Longest Substring Without Repeating Characters Using Sliding Window JavaScript
 
Example 1:
Input: s = "abcabcbb" Output: 3Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: s = "bbbbb" Output: 1Explanation: The answer is "b", with the length of 1.
Example 3:
Input: s = "pwwkew" Output: 3Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. 
*/

function printLongestSubstring(s) {
  const n = s.length;
  let l = 0;
  let r = 0;
  const visited = new Set();
  let maxStr = 0;
  let maxL = 0;
  let maxR = 0;
  while (r < n ) {
      // Check If the character at s[r] has not been visited
      if(!visited.has(s[r])) {
        visited.add(s[r]);
        // calculate the length of the current substring
        if(r - l + 1 > maxStr) {
          maxStr = r - l + 1;
          maxL = l;
          maxR = r;
        }
        r++;
      } else {
        // If the character at s[r] has been visited, remove s[l] from the set
        visited.delete(s[l]);
        l++;
      }
  }

  // Print the longest susstring without repeating characters
  let longestSubstring = '';
  for (let i = maxL; i <= maxR; i++) {
    longestSubstring = longestSubstring + s[i];
  }
  return longestSubstring;

}

console.log(printLongestSubstring("abcabcbb"));
console.log(printLongestSubstring("bbbbb"));
console.log(printLongestSubstring("pwwkew"));