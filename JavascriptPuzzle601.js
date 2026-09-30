// What is the output of the following code?

console.log("1");

async function test() {
    console.log("2");
    await Promise.resolve();
    console.log("3");
}

Promise.resolve().then(() => {
    console.log("4");
});

setTimeout(() => {
    console.log("5");
}, 0);

test();

console.log("6");

/* 
1
2
6
4
3
5
*/