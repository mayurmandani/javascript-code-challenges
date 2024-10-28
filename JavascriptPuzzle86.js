/* What will be the output of the below code */

console.log("begins");  // 1

setTimeout(() => {
  console.log("setTimeout 1");  // 3
  Promise.resolve().then(() => {
    console.log("promise 1"); // 4
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2"); // 2
  setTimeout(function () {
    console.log("setTimeout 2"); // 5
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1"); // 6
  setTimeout(() => {
    console.log(res); // 7
  }, 0);
});
