/* Promise.allSettled([promises]) - This method waits for all promises to settle(resolve/reject) and returns their results as an array of objects. 
The results will contain a state (fulfilled/rejected) and value, if fulfilled. In case of rejected status, it will return a reason for the error. */

function fetchData(URL) {
  return new Promise((resolve, reject) => {
        fetch(URL)
        .then((response) => {
          if(response.status == 200) {
            return response.json();
          } else {
            reject(response);
          }
        })
        .then(data => {
           resolve(data);
        })
        .catch(error => {
          reject(error);
        });
  });
}

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

let promise1 = fetchData(BULBASAUR_POKEMONS_URL);
let promise2 = fetchData(RATICATE_POKEMONS_URL);
let promise3 = fetchData(KAKUNA_POKEMONS_URL);

Promise.allSettled([promise1, promise2, promise3]).then(result => {
  console.log(result);
}).catch(error => {
  console.log('There is an Error!', error);
});