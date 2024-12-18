/* Write a program to reverse a string by words. input is "JavaScript is awesome" and expected output is "awesome is JavaScript" */

const str = "JavaScript is awesome";

function reverseWord(str) {
    let tempString = str.split(" ").reverse().join(" ");
    return tempString;
}

console.log(reverseWord(str));