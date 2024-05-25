// What is the Output of the following Code Snippet and Why?

const str = "ab ki bar 400 par";

const arr = str.split(" ");

const result = arr.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
}) 

const output = result.join("").padStart(14, '#');

console.log(output);