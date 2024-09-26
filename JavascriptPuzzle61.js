/* ES9 (ES 2018) Javascript finally() with example */

const urls = [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
   .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
})
.catch(err => console.log('ughhhh fix it!', err))
.finally(() => console.log('extra'))