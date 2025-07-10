/* Write a function that takes an array of integers and returns a list of all the unique triplets [a, b, c] in the array such that a + b + c = 0 
const nums = [-1, 0, 1, 2, -1, -4]; 
expected output = [[ -1, -1, 2 ], [ -1, 0, 1 ]];

*/

const nums = [-1, 0, 1, 2, -1, -4]; 

function threeSum(nums) {
  // sorting the array
  nums.sort((a, b) => a - b);

  const result = [];

  for(let i = 0; i < nums.length - 2; i++) {
    // skip duplicate value for i
    if( i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right ) {
      const sum = nums[i] + nums[left] + nums[right];

      if(sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // skip duplicates for Left and right
        while(left < right && nums[left] === nums[left + 1]) left++;
        while(left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;  
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
    return result;
}

console.log(threeSum(nums));  // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]