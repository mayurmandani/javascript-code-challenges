/* Find the missing number from the array */

function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}


console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3