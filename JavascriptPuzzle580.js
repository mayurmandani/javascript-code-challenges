// What is the output of the following code?

console.log("Hello World");

var a = 107;
var b = 209;

setTimeout(() => {
  console.log("call me after 3 seconds");
}, 3000);

setTimeout(() => {
  console.log("call me right now");
}, 0);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);


/* 
Hello World
Multiplication result is:  22363
call me right now
call me after 3 seconds
*/