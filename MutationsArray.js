/* Return All possible per mutations of an given Array, const arr = [1, 3, 2]
output should be like [[ 1, 3, 2 ],[ 1, 2, 3 ],[ 3, 1, 2 ],[ 3, 2, 1 ],[ 2, 1, 3 ],[ 2, 3, 1 ]] */

const arr = [1, 3, 2];

function mutation(arr) {
    let output = [];
    if(arr.length == 0) return [];
    if(arr.length === 1) return [arr];
    for(let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const remainingNumber = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingNumberPuted = mutation(remainingNumber);
        for(let j = 0; j < remainingNumberPuted.length; j++) {
            const permutedArr = [currentNumber].concat(remainingNumberPuted[j]);
            output.push(permutedArr);
        }
    }
    return output;
}

console.log(mutation(arr));