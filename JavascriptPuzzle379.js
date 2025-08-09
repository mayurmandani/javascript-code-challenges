/* Promise.all([promises]) accepts a collection (for example, an array) of promises as an argument and executes them in parallel. 
This method waits for all the promises to resolve and returns the array of promise results. 
If any of the promises reject or execute to fail due to an error, all other promise results will be ignored.
*/

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

Promise.all([promise1, promise2, promise3]).then((result) => {
  console.log({result});
}).catch(error => {
  console.log('An Error Occured', error);
});


