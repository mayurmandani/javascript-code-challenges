/* Count the frequency of elements from array */

let check = ["hello", "world", "java", "hello", "java"];

function countWord(arr) {
    let count = {};
    arr.forEach((item) => {
        if (count[item]) {
            count[item]++
        }
        else {  
            count[item] = 1;
        }
    })
    return count;
}

console.log(countWord(check));  //  { hello: 2, world: 1, java: 2 }