/* let arr = [[1, 2],[3, 4, 5], [6, 7, 8, 9]]; expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9] */

let arr = [[1, 2],[3, 4, 5], [6, 7, 8, 9]];

// (1) using concat() and apply()
let flatArray = [].concat.apply([], arr);
console.log(flatArray);

// (2) using the spread operator
let flatArraySpread = [].concat(...arr);
console.log(flatArraySpread);

// (3) using the reduce method
let flatArrayReduce = arr.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);
console.log(flatArrayReduce);

// (4) using the flat() method
let flatArrayMethod = arr.flat(2);
console.log(flatArrayMethod);

