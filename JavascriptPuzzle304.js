/* 
findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. 
If no elements satisfy the testing function, -1 is returned.
*/

const temperatures = [25, 28, 30, 32, 33, 31, 29];

const lastIndex = temperatures.findLastIndex(temp => temp > 30);

console.log(lastIndex);  // 5