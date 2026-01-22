/* Write a function reverseString using recursion in javascript and it will return the reverse string. 

let str = "Mayur";
let output = "ruyaM"

*/

const str = "Mayur";

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString(str)); // ruyaM