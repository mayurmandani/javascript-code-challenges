/* ES9 (ES 2018) Javascript for await of with example */

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData2 = async function() {
    try {
        const arrayOfPromises = urls.map(url => fetch(url));
        for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
        }

    } catch(err) {
        console.log('error', err);
    }   
}

getData2()