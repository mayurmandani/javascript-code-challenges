/* Write a function to find the Missing Number in arr = [2, 4, 5, 6, 8] expected output are [3, 7] */

const arr = [2, 4, 5, 6, 8];

const findMissingNumber = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    const missingNumber = [];
    for(let i = min; i <= max; i++) {
        if(!arr.includes(i)) { // Checking whether i(current value) present in arr(argument)
            missingNumber.push(i) // Adding numbers whcih are not in arr(argument) array
        }
    }
    return missingNumber;
}

console.log(findMissingNumber(arr));