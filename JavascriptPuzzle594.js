// What is the output of the following code?

setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B"));

queueMicrotask(() => console.log("C"), 1000);

console.log("D");

/* 
D 
B
C
A
*/