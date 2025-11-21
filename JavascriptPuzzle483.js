/* Find a duplicate number from array [1,3,4,2,2] and expected output is 2 */


function findDuplicate(nums) {
  const set = new Set();
  for(let num of nums) {
    if(set.has(num)) return num;
    set.add(num);
  }
}

const arr = [1, 3, 4, 2, 2];

const output = findDuplicate(arr);

console.log(output);  // 2