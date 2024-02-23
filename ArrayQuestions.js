/* How to convert array of strings value to array of numbers in JavaScript 
for an example stringArray = ["1", "2", "3", "4", "5"] expected output is [1, 2, 3, 4, 5] */

const stringArray = ["1", "2", "3", "4", "5"];

let numberArray = [];

let len = stringArray.length;

for(let i = 0; i < len; i++) {
    numberArray.push(parseInt(stringArray[i]));
}

console.log(numberArray, "numberArray");

// Solution 2 Using map() method of Javascript

let numberArrayMap = stringArray.map(Number);

console.log(numberArrayMap, "Using map() method of Javascript");

// Soution 3 Using forEach loop of JavaScript

let numberArrayForEach = [];

stringArray.forEach(ele => numberArrayForEach.push(+ele));

console.log(numberArrayForEach, "Using forEach loop of JavaScript");

// Solution 4  Using reduce method of JavaScript

let numberArrayReduce = stringArray.reduce((acc, x) => acc.concat(+x), []);

console.log(numberArrayReduce, "Using reduce method of JavaScript");
