/*Promise example with multiple api response */

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log('users', results[0])
    console.log('posts', results[1])
    console.log('albums', results[2])
}).catch(() => console.log('error'))