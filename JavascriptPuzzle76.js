/* Write the example of Reverse a string using recursion */

let str = "mayur";

// substr() method returns the characters in a string beginning at the specified location through the specified number of characters.

// charAt methods returns the specified character from a string

function reverseString(str) {
    if(str === "") // This is the terminal case that will end the recursion
      return "";
    else
    return reverseString(str.substr(1)) + str. charAt(0);   
}

console.log(reverseString(str));