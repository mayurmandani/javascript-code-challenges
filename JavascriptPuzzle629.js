// What is the output of the following code?

console.log("start");

Promise.resolve().then(() => {
  console.log("p1");

  Promise.resolve().then(() => {
    console.log("p2");
  });
});

Promise.resolve().then(() => {
  console.log("p3");
});

console.log("end");

/* 
start
end
p1
p3
p2
*/