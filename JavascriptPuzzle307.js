/* 
The toSpliced() method of Array instances is the copying version of the splice() method. 
It returns a new array with some elements removed and/or replaced at a given index.
*/

const numbers = [1,2,3,4,5,6];

const newNumbers = numbers.toSpliced(4, 1);

console.log(newNumbers); // [ 1, 2, 3, 4, 6 ]