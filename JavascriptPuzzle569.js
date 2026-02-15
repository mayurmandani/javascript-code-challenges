//  Write a function which Calculate the sum of numbers in an array of numbers

function sumArray(arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];

let sum = sumArray(arr);

console.log(sum); // 146