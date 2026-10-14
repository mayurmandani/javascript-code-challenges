// What is the output of the following code?

Promise.resolve(10)
    .then(() => {
        throw new Error("Something went wrong");
    })
    .then(() => {
        console.log("Success");
    })
    .catch(() => {
        console.log("Error");
    });

    /* Error */