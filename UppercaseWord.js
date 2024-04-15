/* Uppercase the first character of each word in a string, input is "hello world" and expected output is "Hello World" */

let str = "hello world";

const uppercaseWord= (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

console.log(uppercaseWord(str));