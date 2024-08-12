/* Write a JavaScript program to reverse a given string. */

const str = "thanks for reading";

function reverseString(str) {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const reverseStr = reverseString(str);

console.log(reverseStr);