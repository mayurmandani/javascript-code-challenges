/*  write a one-liner in JavaScript to find the longest consecutive sequence 
of a specific element in an array? */

const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

const longestConsecutiveSequence = (arr, element) => Math.max(...arr.join('').split(element).map(group => group.length));

console.log(longestConsecutiveSequence(arr, 5));