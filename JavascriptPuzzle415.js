/* A promise is an object returned by an asynchronous function, which represents the current state of the operation. */

const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");


console.log(fetchPromise);
// pending : the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.

fetchPromise.then((response) => {
  if(!response.ok){
    throw new Error(`Http error: ${response.status }`);
  }
  return response.json();
})
// fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
.then((data) => {
    console.log(data[0].name);
})
// rejected - the asynchronous function has failed. When a promise is rejected, its catch() handler is called.
.catch((error) => {
  console.log(`Could not get products: ${error}`);
});


console.log("Started request...");