/* write the funtion which will take arr and target as parameter and return the target sum of index number of array 
let arr = [2,3,7,8,11, 16, 20];
let target = 9;
output = [0,2]
*/
let arr = [2,3,7,8,11, 16, 20];
let target = 9;

function findIndexNumber(arr, target) {
    let len = arr.length;
    for(let i = 0; i <= len; i++) {
        for(let j = 0; j <= len; j++) {
            if(arr[i] + arr[j] == target) {
                return[i,j];
            }
        }
    }
}

console.log(findIndexNumber(arr, target));