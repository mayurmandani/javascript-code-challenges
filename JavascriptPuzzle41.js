/* Write the function isPalindrome to check the stirng is palindrome or not without using the reverse methods of javascript */

function isPalindrome(str) {
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i];
    }
    if(rev == str) {
        return true;
    }
    else {
        return false;
    }
}


let str1 = "racecar"; 
let str2 = "mayur";
let str3 = "madam";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));


