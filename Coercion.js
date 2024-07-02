/* Coercion is an automatic type conversion that occurs in JavaScript 
when you want to perform certain operations. 
Type conversion can either be implicit (automatically done during code execution) 
or explicit (done by you the developer). */

const sum = 11 + "Hi";

console.log(sum); // Output: "11Hi" --- numeric to string coercion 

const a = "hi" + 11 + 7

console.log(a); // Output: hi117
// step1: "hi" + 11 = "hi11" (11 gets converted to string)
// step2: "hi11" + 7 = "hi117" (then 7 gets converted to string)

const b = 11 + 7 + "hi"

console.log(b); // Output: 18hi
//step1: 11 + 7 = 18 (no coercion since same datatype) 
//step2: 18 + "hi" = "18hi" (18 gets converted to string)