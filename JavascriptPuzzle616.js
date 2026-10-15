// What is the output of the following code?

Promise.resolve(10)
    .then(x => x * 2)
    .then(x => x + 5)
    .then(x => console.log(x));

// 25    