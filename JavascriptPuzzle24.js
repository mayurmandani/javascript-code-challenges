/* Find the max value from array using the reduce method of javascript */

const arr = [1, 3, 5, 7, 8, 4, 9];

const max = arr.reduce((acc, val) => {
    return acc > val ? acc : val;
})

console.log("Maximum number value", max);
