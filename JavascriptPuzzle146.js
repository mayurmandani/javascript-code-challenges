/* Write a function sortedArr, it will return the sortedValue of array without using the inbuilt methods of javascript.
let arr = [1,4,2,9,3]
output = [1,2,3,4,9]
*/

let arr = [1,4,2,9,3]; 

function sortedArr(arr) {
  if(arr.length <= 1) return arr;
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  
  arr.forEach((item, i) => {
    if(i) {
       item < pivot ? leftArr.push(item) : rightArr.push(item);
    }
  });
  return [...sortedArr(leftArr), pivot, ...sortedArr(rightArr)];
}

console.log(sortedArr(arr));