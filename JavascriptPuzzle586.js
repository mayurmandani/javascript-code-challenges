// What is the output of the following code?

console.log("A");

Promise.resolve().then(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
});

console.log("D");

/* 
A
D
B
C
*/