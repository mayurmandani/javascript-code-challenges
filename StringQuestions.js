/* let str = 452635381478 expected output = 12345678 
remove the duplicate value and sort in ascending order */

let str = 452635381478

let newArr = Array.from(String(str));   // converting string to array

const uniqueArr = [...new Set(newArr)];  // removed the duplicate value from array

const sortedArr = uniqueArr.sort((a, b) => a - b);  // sorted value in ascending order

const output = sortedArr.join(""); // converting array to string

console.log(output);