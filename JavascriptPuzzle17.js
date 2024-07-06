/* Write a Program to Find the consecutive letter count and display the 
output like => Input :"aaavvccfr", Output:"a3v2c2fr1" */

let input = "aaavvccfr";

function countWord(input) {
    let output = "";
    let count = 1;
    let word = input.split("");
    for(let i = 0; i < word.length; i++) {
        if(word[i] === word[i + 1]) {
            count++;
        } else {
            output += word[i] + count;
            count = 1;
        }
    }
    return output;
}

console.log(countWord(input));


