/* Given a string s, find its largest palindromic substring. A palindromic substring is a sequence of characters in the string that reads the same forwards and backwards. 
If there are multiple possible outputs, print only the leftmost one. 

Example:

Input:
str = "babad"
 
Output:
"bab"

Explanation:
Both "bab" and "aba" are palindromic substrings of "babad". Since "bab" appears first, it is considered the correct output.
*/

let str = "babad";

function longestPalindrome(str){
    let longest = "";
    
    for(let i=0; i<str.length; i++){
    
    // for odd string
    checkLeftandRight(i,i);
    // for even string
    checkLeftandRight(i, i+1);
    }
    
    // check left and right index value in string to check it from center
    function checkLeftandRight(left, right){
    while(left>=0 && right< str.length && str[left] === str[right]){
    if(right -left + 1 > longest.length){
    longest = str.slice(left, right +1);
    }
    left--;
    right++;
    }
    }
    
    return longest;
   }
   
   console.log(longestPalindrome(str));