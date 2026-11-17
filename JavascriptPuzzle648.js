// What is the output of the following code?

Promise.resolve(100)
    .finally(() => {
        return 200;
    })
    .then(result => {
        console.log(result);
    });

 // 100  