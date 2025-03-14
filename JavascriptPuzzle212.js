/* Given a string s, find the length of the longest substring length without duplicate characters.

Longest Substring Without Repeating Characters Using Sliding Window JavaScript
 
Example 1:
Input: s = "abcabcbb" 3Explanation: The answer is "abc", with the length of 3 
Output: 3
Example 2:
Input: s = "bbbbb" 1Explanation: The answer is "b", with the length of 1.
Output: 1
Example 3:
Input: s = "pwwkew" 3Explanation: The answer is "wke", with the length of 3.
Output: 3
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. 

*/

var lengthOfLongestSubstring = function(s) {
  
  if(!s) {
    return 0;
  }
  // Sliding Window approach
  let end = 0;
  let start = 0;
  let maxlength = 0;

  const uniqueCharacters = new Set();

  while(end < s.length) {
      if(!uniqueCharacters.has(s[end])) { 
        uniqueCharacters.add(s[end]);
        end++;
        maxlength = Math.max(maxlength, uniqueCharacters.size);
      } else {
        uniqueCharacters.delete(s[start]);
        start++;
      }
  }
  return maxlength;
};


console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));