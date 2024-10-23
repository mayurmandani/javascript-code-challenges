/* Write the isSpecialArray function to take input parameter value [1, 2, 4] and expected output is true */

let nums = [2, 1, 4];

function isSpecialArray(nums) {
    for(let i = 0; i < nums.length - 1; i++) {
      // If adjacent elements have the same parity, return false
      if(nums[i] % 2 === nums[i + 1] % 2) {
        return false;
      }  
    }
    return true;
}

console.log(isSpecialArray(nums));