/* Write the promise, it will return the message from server 'this is my data from a server' */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('this is my data from a server'));
})
promise.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})