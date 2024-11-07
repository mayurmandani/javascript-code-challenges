/* Write a function: function solution(A)
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000]. */

function solution(A) {
    // only positive values, sorted
    A = A.filter(x => x >= 1).sort((a, b) => a - b);
    
    let x = 1;

    for(let i = 0; i < A.length; i++) {
        // If we find a smaller number no need to continue, cause the array is sorted
        if(x < A[i]) {
            return x
        }
        x = A[i] + 1;
    }
    return x;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1