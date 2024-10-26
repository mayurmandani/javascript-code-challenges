/* let str = "abcd" and expected output will be ABbCccDddd  */

let str = "abcd"; 

function repeatArrValue(str) {
    let strArr = str.split("");
	let output = [];
    for(let i in strArr) {
       output.push(strArr[i].repeat(parseInt(i) + 1));
       output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1);  		
    }
    return output.join("");
}

console.log(repeatArrValue(str));
