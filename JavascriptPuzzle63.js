/* Write the example of promise for Parallel, Sequence, Race */
// Sequence, 

const promisify = (item, delay) => {
   return new Promise((resolve) => {
        setTimeout(() => {
            resolve(item, delay)
        });
    });
}

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

// Parallel, 
async function parallel(){
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${output1} ${output2} ${output3}`;    
}

// parallel().then(data => console.log(data))

// Race
async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
}

// race().then(data => console.log(data))

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${output1} ${output2} ${output3}`;
}

// sequence().then(data => console.log(data))

parallel().then(data => console.log(data))
sequence().then(data => console.log(data))
race().then(data => console.log(data))
