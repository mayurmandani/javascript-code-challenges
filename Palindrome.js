/* Write a function that will check the string is a palindrome or not.  
Palindrome is a word, sentence or character sequence which reads the same as we reverse it. Like- “mam”, “racecar”.
*/

function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("car")); // false
