/* Write a function to find the median of a given array of numbers. The array may be unsorted */

let arr = [3, 1, 2, 5, 4];


function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

console.log(findMedian(arr));