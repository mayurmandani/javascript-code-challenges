/* Write a function getPositives that receives an array of numbers and returns an array containing only the positive numbers */

function getPositives(arr) {
  const getPositiveArrList = arr.filter(el => el > 0);
  return getPositiveArrList;
}

const arr =  [-5, 10, -3, 12, -9, 5, 90, 0, 1];

const positibeArray = getPositives(arr);

console.log(positibeArray);  // [ 10, 12, 5, 90, 1 ]