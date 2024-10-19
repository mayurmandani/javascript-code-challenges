/* Reverse a string without using reverse function in javascript */

let str = "mayur"

function reverseString(str) {
    let newString = "";
    // created an empty string that will host the new created string

    /* created the for loop, The starting point of the loop will be (str.length - 1) which corresponds to the last character of the string "r"
       As long as i is greater than or equals 0, the loop will go on
       we decrement i after each iteration */

    for(let i = str.length - 1; i >= 0; i--) {
          newString =  newString + str[i];
    }
    // Return the reversed string
    return newString;
}

console.log(reverseString(str));