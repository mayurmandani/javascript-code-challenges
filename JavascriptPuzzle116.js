/* Write the function multiply which accept single, double, three values as paramter as optional and return the output */


function multiply(para1 = 1, para2 = 1, para3 = 1) {
    return para1 * para2 * para3;
}

console.log(multiply(2, 5, 6)); 
console.log(multiply(2, 5));
console.log(multiply(2));