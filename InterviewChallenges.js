/* Write a function, It will add $ before every even number in the array 
input : [124356869247] and expected output is 1$2$435$6$8$69$2$47 */


let arr = [124356869247];

let newArr = Array.from(String(arr));

function addValue(newArr) {
    let output = [];
    for(let i = 0; i < newArr.length; i++) {
        let curValue = newArr[i];
        if(curValue % 2 === 0) { 
           output.push("$", curValue);  
        }
        else {
            output.push(curValue);	
        }
    }		
    return output.join("");
}

console.log(addValue(newArr));