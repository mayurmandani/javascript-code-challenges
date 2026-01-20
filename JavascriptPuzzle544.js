// What is the output of the following code?

const arr = [2, 5, '', '3', undefined, 5, {}];

function sum(arr) {
  let sum = 0;
  for (var i = 0;  i < arr.length; i++) {
    if(typeof(arr[i]) === "number" || typeof(arr[i]) === "string") {
        sum = sum + Number(arr[i]);
    }
  }
  return sum;
}

console.log(sum(arr));  // 15