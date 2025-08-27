/* Capitalize First Letter of Each Word in string consider input = "hello world" and expected output = "Hello World" */

let str = "hello world";

function capitalizeWords(str) {
   return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords(str)); // Hello World