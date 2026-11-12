// What is the output of the following code?

console.log("A");

Promise.resolve().then(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
});

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");

/* 
A
E
B
D
C
*/