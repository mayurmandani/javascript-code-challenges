// What is the output of the following code?

console.log("1");

Promise.resolve().then(() => {
    console.log("2");
});

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

/* 
1
4
2
3
*/