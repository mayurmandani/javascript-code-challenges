/* Write a program to reverse a string by each Alphabets. input is "JavaScript is awesome" and expected output is "tpircSavaJ si emosewa" */

const str = "JavaScript is awesome";

function reverseStr(str) {
   let temp = str.split(" ").map((s) => s.split("").reverse().join("")).join(" ");
   return temp;
}

console.log(reverseStr(str));