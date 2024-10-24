/*
Find the length of the longest substring without repeating characters 
let str = "abbbcabcdefef"

longest substring without repeating characters is "abcdef". so output will be 6 

*/

let str = "abbbcabcdefef"

let getLength = (str) => {
    let currentString = [];
    let finalLength = 0;

    for(let i = 0; i < str.length; i++) {
        const currentCharacterIndex = currentString.indexOf(str[i]);

        if(currentCharacterIndex !== -1) {
            currentString.splice(0, currentCharacterIndex + 1);
        }

        currentString.push(str[i]);
        finalLength = Math.max(finalLength, currentString.length);
    }

    return finalLength;  
};

console.log(getLength(str));