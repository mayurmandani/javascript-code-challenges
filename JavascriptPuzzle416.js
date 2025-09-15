/* Combining multiple promises - Promise.all() method takes an array of promises and returns a single promise. */

const fetchP1 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

const fetchP2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");

const fetchP3 = fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");


Promise.all([fetchP1, fetchP2, fetchP3])
.then((responses) => {
  for(const response of responses) {
    console.log(`${response.url}: ${response.status}`);
  }
})
.catch((error) => {
  console.error(`Failed to fetch: ${error}`);
});