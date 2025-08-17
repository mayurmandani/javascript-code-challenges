/* Find the Duplicate number using the Set Method */

const nums = [1,3,4,2,2];

function findDuplicate(nums) {
  const set = new Set();
  for(let num of nums) {
    if(set.has(num)) {
      return num;
    }
    set.add(num);
  }
}

console.log(findDuplicate(nums)); // 2