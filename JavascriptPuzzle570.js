/* Write a function averageArray which calculate the average of the numbers in an array of numbers */

function averageArray(arr) {
  let n = arr.length;
  let sum = 0;

  for(let i = 0;  i < n; i++) {
    sum += arr[i];
  }

  return sum / n;
}

const arr = [1, 3, 9, 15, 90];

const averageValue = averageArray(arr);

console.log(averageValue);  // 23.6
