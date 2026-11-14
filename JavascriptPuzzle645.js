// What is the output of the following code?

console.log("Start");

Promise.resolve()
    .then(() => {
        console.log("P1");

        setTimeout(() => {
            console.log("T1");
        }, 0);
    })
    .then(() => {
        console.log("P2");
    });

setTimeout(() => {
    console.log("T2");
}, 0);

console.log("End");

/* 
Start
End
P1
P2
T2
T1
*/