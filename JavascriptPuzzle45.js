/* Write a deepClone function that take the object as argument and return the deep copy data */

const input = { name: 'Mayur', city: 'Vadodara', state: 'Gujarat'};

function deepClone(input) {
    return JSON.parse(JSON.stringify(input));
}

console.log(deepClone(input));