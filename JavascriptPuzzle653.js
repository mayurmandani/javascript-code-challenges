// What is the output of the following code?

const p1 = Promise.resolve("Success");

const p2 = Promise.reject("Failed");

Promise.allSettled([p1, p2]).then(result => {
    console.log(result);
});

/* 
[
    { status: "fulfilled", value: "Success" },
    { status: "rejected", reason: "Failed" }
]
*/