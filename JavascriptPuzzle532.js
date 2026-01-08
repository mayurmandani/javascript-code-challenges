// What will be the output of the following code snippet?

function fetchData(callback) {
    // Simulating async fetch
    setTimeout(() => {
        const data = 'Fetched data';
        //  Callbacks are functions passed as arguments to other functions, often used for async tasks
        callback(data)
    }, 1000)
}

fetchData((result) => {
    console.log(result)
})

/* 
Fetched data
*/