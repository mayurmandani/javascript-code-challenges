/* let arr = [1,0,6,8,0,7,0,9,3,4,0,0]  expected output is [1,6,8,7,9,3,4,0,0,0,0] 
Pre conditions: Without using the map, reduce, push methods of javascript */

let arr = [1,0,6,8,0,7,0,9,3,4,0,0];

function moveZeroesLast(arr) {
        let count = 0;
        
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                arr[count++] = arr[i];
            }
        } 
        
        for(let i = count; i < arr.length; i++) {
            arr[i] = 0;
        }
        return arr;
}

console.log(moveZeroesLast(arr));
