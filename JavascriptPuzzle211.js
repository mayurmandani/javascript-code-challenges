/* Given a string s, find the length of the longest substring length without duplicate characters.
 
Example 1:
Input: s = "abcabcbb" Output: 3.
Example 2:
Input: s = "bbbbb"   Output: 1.
Example 3:
Input: s = "pwwkew"  Output: 3.

*/

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let res = 0;
    for(let i = 0; i < n; i++) {
        // Intializing all characters as not visited    
        let vis = new Array(26).fill(false);
        for(let j = i; j < n; j++) {
         // If current character is visited
         // Break the loop
         if(vis[s.charCodeAt(j) - 'a'.charCodeAt(0)] === true) {
            break;
         }
         // Else update the result if this window is larger,
         // and mark current character as visited.
         else {
            res = Math.max(res, j - i + 1);
            vis[s.charCodeAt(j) - 'a'.charCodeAt(0)] = true;
         }   
        }
    }
    return res;
  }


console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));