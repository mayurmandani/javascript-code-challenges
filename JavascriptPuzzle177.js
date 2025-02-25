/* Reverse the string, let str = "Hello from Mayur" and expected output = "olleH morf ruyaM" */

let str = "Hello from Mayur";

let output = str.split(" ").map((s) => s.split("").reverse().join("")).join(" ");

console.log(output); // olleH morf ruyaM