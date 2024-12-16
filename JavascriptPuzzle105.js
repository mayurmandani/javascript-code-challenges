/* Create a function which returns a random number in the given range of values both inclusive */

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
}

console.log(randomNumberGeneratorInRange(10, 50));