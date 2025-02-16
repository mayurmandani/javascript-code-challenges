/* What is the output of the below code */

function mysteryFunction(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += (arr[i] % 2 === 0) ? arr[i] : 0;
  }
  return result;
}

console.log(mysteryFunction([1, 2, 3, 4, 5])); // 6