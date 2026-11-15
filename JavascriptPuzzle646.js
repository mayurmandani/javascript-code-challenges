// What is the output of the following code?

console.log("A");

const promise = new Promise((resolve) => {
    console.log("B");
    resolve("C");
    console.log("D");
});

promise.then((value) => {
    console.log(value);
});

console.log("E");

/*
A
B
D
E
C 
*/