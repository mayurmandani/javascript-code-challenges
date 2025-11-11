/* Write a rotateArr function which takes input as arr [1,2,4] and return output as arr [4,1,2] */

const arr = [1, 2, 4];

function rotateArr(arr) {
  const result = [];
  const n = arr.length;
  let left = 0;
  let right = n - 1;

  while(left <= right) {
      if(right >= left) result.push(arr[right--]);
      if(left <= right) result.push(arr[left++]);
  }

  return result;

}

const output = rotateArr(arr);

console.log(output);  // [ 4, 1, 2 ]
