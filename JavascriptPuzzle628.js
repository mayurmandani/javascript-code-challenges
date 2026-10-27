// What is the output of the following code?

Promise.resolve(10)
  .then(value => {
    console.log(value);
    throw new Error("Oops");
  })
  .catch(error => {
    console.log(error.message);
    return 20;
  })
  .then(value => {
    console.log(value);
    return Promise.reject("Failed");
  })
  .catch(error => {
    console.log(error);
  });

console.log("End");

/* 
End
10
Oops
20
Failed
*/