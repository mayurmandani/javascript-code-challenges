/* Write the javaScript function without using In built methods - isPalindrome to check given 
string is palidrome or not */

function isPalindrome(str) {
    let newString = "";

    for(let i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }

    if(newString === str) {
        let palidrome = (`${str} is Palindrome`);
        return palidrome;
    } else {
        let notPalidrome = (`${str} is not Palindrome`);
        return notPalidrome;
    }
    
}

console.log(isPalindrome("deed"));
console.log(isPalindrome("test"));

