/* convert the input string to output as below 

let input = "India is my country"

output = "Aidni si ym yrtnuoc"

*/

let input = "India is my country";

let reverseStr = input.split(" ").map((s) => s.toLowerCase().split("").reverse().join("")).join(" ");

// Replaced the first character of the string
const output = reverseStr.replace("a", "A");

console.log(output);



