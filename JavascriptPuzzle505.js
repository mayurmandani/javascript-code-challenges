/* Write a function checkString, it will take str1, str2 and in case of string1 matched word in string2 that return  
It's matched String or else It's not matched String.
*/

let str1 = "Hi I am Mayur";

function checkString(str1, str2) {
    let firstString = str1.toUpperCase();
    let secondString = str2.toUpperCase();
    if(firstString.includes(secondString)) {
        return `It's matched String`;
    }
     else {
        return `It's not matched String`;
     }
}

console.log(checkString(str1, "MAYUR")); // It's matched String

console.log(checkString(str1, "Niti"));  // It's not matched String