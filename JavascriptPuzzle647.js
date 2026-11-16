// What is the output of the following code?

const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 100);
});

const p2 = Promise.resolve("Second");

Promise.all([p1, p2]).then(console.log);  // [ 'First', 'Second' ]