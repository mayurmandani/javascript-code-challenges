/* Write a function for quickSort 
arr = [6,4,0,3,-2,1] and output = [-2, 0, 1, 3, 4, 6] */

const arr = [6, 4, 0, 3, -2, 1];

const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    arr.forEach((item, i)=> {
        if(i) {
            item < pivot ? leftArr.push(item) : rightArr.push(item)
        }
    });

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(arr));