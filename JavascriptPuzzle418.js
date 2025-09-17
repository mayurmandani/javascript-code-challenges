/* use async and await keyword and write a promise using of javaScript */

async function fetchProducts() {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the fetch() call will either return a Response or throw an error
    const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    if(!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    return data;
}

const promise = fetchProducts();

promise
.then((data) => {
   console.log(data[0].name);  // baked beans
})
.catch((error) => {
    console.error(`Coud not get products: ${error}`);
});