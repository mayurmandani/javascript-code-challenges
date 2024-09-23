/* Find the target number in array and return the index value of target number 
const arr = [2,1,4,3,19,10]
target = 19;  
expected output is: 4  */

const arr = [2,1,4,3,19,10];
const target = 19;

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        // check if the current element in the array matches the target
        if(arr[i] === target) {
            // If found, return the index where target is located
            return i;
        }
    }
    // If the loop completes without finding the target, return -1 to indicate it's not in the array 
    return -1;
}

function main(arr, target) {
     // Call the LinearSearch methods to search for the target in the array       
        const index = linearSearch(arr, target);

        if(index !== -1) {
            // If the index is not -1, the target was found: print the index
            return(index);
        } else {
            // If the index is -1, the target was not found; print a message
            return("Number not found in the array.");
        }
}

console.log(main(arr, target));