/* Write a rearrangeArray function is Javascript which takes input as arr [1,2,3,4,5] and return output as arr [5,1,4,2,3] */

let arr = [1,2,3,4,5];

function rearrangeArray(arr) {
    const result = [];
    const n = arr.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        if(right >= left) result.push(arr[right--]);
        if(left <= right) result.push(arr[left++]);
    }
    return result;
}

const output = rearrangeArray(arr);

console.log(output);

