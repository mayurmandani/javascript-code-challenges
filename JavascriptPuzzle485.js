/* Capitalize First Letter of Each Word in string "hello world" */

let str = "hello world";

function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const output = capitalizeWords(str);

console.log(output);  // Hello World