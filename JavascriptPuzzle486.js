/* Find a Majority Element from array [2,2,1,1,2,2] and expected output is 2 */

const arr = [2,2,1,1,2,2];

function majorityElement(nums) {
  const count = {};
  const n = nums.length;
  for(let num of nums) {
    count[num] = (count[num] || 0) + 1;
    if(count[num] > n /2) return num;
  }
}

const output = majorityElement(arr);

console.log(output);  // 2