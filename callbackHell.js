/* Write the example of callbackHell in Javascript */

function callbackHell() {
    setTimeout(() => {
        const data = { user : "Mayur" };
        console.log(data);
        setTimeout(() => {
            console.log(`Data has been updated`);
        }, 1000);
        setTimeout(() => {
            console.log(`Nested call fired`);
        }, 900);
    }, 500)
}

callbackHell();