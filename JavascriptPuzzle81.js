/* 
Provided an array that contains numbers as well as alphabets. You have to restructure the array in a way that numbers come first and alphabets second.
let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
output should be [2, 4, 3, 5, 1, "b", "d", "a", "c", "e"];
*/

let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];

let numbersFirstAlphabetsSecond = (arr) => {
    let numbers = [];
    let alphabets = [];
    let finalArr = [];

    numbers = arr.filter((val) => typeof val === "number");
    alphabets = arr.filter((val) => typeof val === "string");
    finalArr = [...numbers, ...alphabets];
    return finalArr;
}

console.log(numbersFirstAlphabetsSecond(arr));