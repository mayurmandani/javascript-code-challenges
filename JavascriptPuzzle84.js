/* Pipe and Compose Function Example - Javascript Functional Programming */

// Functional Programming

// Often uses pipe and compose = higher order functions

/* A higher order function is any function which takes a function as an argumnet, return a function, or both */

// Here's how  a "compose" function works:

const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

// Notice how the functions execute from inside to outside & right to left
const result = multiplyBy5(subtract1(add2(4)));

console.log(result, "result");

/* to get the compose order from right to left as we see with nested function calls in our example above,
we need reduceRight... */

const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);
const compResult = compose(multiplyBy5, subtract1, add2)(4);
console.log(compResult, "compResult");

/* To do the same, but read from left to right... we use "pipe" 
It is the same except uses reduce instead of reduceRight.  */

const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);

const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);

console.log(pipeResult, "pipeResult");

// You will often see the functions on separate lines

const pipeResult2 = pipe(
    add2,
    subtract1,
    multiplyBy5
)(6);

console.log(pipeResult2, "pipeResult2");
