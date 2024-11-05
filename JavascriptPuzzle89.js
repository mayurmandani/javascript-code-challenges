/* Need to log only duplicate elements. 
let array = [1,1,5,5,6,7,7,8,5,9] and output is [1, 5, 7] */

const array = [1,1,5,5,6,7,7,8,5,9];
let output = [];

for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
        if(array[i] === array[j]) {
            // Check if the found duplicate is already in the duplicates array
            if(!output.includes(array[i])) {
                output.push(array[i]);
            }
        }
    }
}

console.log(output);