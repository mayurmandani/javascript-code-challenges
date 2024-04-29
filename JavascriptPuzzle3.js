/* Write a function that will pair up the array element whose sum is equal to a given number. */

let arr = [4,5,6,1,0,2];

const findSumPairs = (arr, value) => {
    let sumLookup = {};
    let output = [];

    for(let i = 0; i < arr.length; i++) {
        let targetVal = value - arr[i];
        if(sumLookup[targetVal]) {
            output.push(arr[i], targetVal);
        }
        sumLookup[arr[i]] = true;
    }
    return output;
}

console.log(findSumPairs(arr, 6));