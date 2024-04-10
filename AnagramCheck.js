/* find the given inputs are anagram or not? 
let input1 = "throw";
let input2 = "worth";
*/

let input1 = "throw";
let input2 = "worth";

function AnagramCheck(input1, input2) {
    let str1 = input1.split("").sort().join("");
    let str2 = input2.split("").sort().join("");
    return str1 === str2;
 }

 console.log(AnagramCheck(input1, input2));