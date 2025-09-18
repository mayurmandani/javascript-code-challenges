/* Promise.any() is fulfilled as soon as any of the array of promises is fulfilled, or rejected if all of them are rejected */

const fetchP1 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

const fetchP2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");

const fetchP3 = fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");


Promise.any([fetchP1, fetchP2, fetchP3])
.then((response) => {
    console.log(`${response.url}: ${response.status}`); // https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
})
.catch((error) => {
  console.error(`Failed to fetch: ${error}`);
});