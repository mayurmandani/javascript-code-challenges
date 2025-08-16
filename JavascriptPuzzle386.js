/* Write a function moveZeros which takes array and return moved zero to last in array */


const arr = [0,1,0,3,12];

function moveZeros(arr) {
  const nonZero = arr.filter(x => x !== 0);
  const zeros = arr.filter(x => x === 0);
  return [...nonZero, ...zeros];
}

console.log(moveZeros(arr)); // [ 1, 3, 12, 0, 0 ]