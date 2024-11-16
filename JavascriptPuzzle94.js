/* Bubble Sort is one of the simplest sorting algorithms. 
It repeatedly steps through the list, compares adjacent items, and swaps them if they are in the wrong order. 
The process continues until the list is sorted. */


function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                // swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


console.log(bubbleSort([5, 1, 4, 2, 8]));
