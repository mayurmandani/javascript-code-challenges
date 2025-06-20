/* Find the two index value from Array which sum is matched with target   

const arr = [10, 15, 3, 7];
target = 17;
expected output = [10, 7];

*/

function twoSum(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] + arr[j] === target) {
          return(`target value is matched with two index value from array [${arr[i]}, ${arr[j]}]`);
        }
    }
    return(`target value is not matched with any of two index value from array`);
  }
}

console.log(twoSum([10, 15, 3, 7], 17));