// What is the output of the following code?

Promise.resolve("Success")
    .then(value => {
        console.log(value);
    })
    .finally(() => {
        console.log("Finally");
    });

/* 
Success
Finally
*/    