/* How would you check if a number is an integer? */

function isInt(num) {
    return num % 1 === 0;
}

console.log(isInt(4));
console.log(isInt(7.5));
console.log(isInt(0.7));