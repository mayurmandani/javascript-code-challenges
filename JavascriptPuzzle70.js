/* write a function to compare two array value and type */

function checkArrayEquality(arrayA, arrayB) {
    return JSON.stringify(arrayA) === JSON.stringify(arrayB);
}

const array1 = ['a', 'b', 'c'];
const array2 = ['a', 'b', 'c'];
const array3 = ['d', 'b', 'c'];

console.log(checkArrayEquality(array1, array2));
console.log(checkArrayEquality(array3, array2));
