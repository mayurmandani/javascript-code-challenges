let str = "This this is is done by You You";

function wordCount(str) {
    // an empty string
    if(str.length === 0) {
        return {};
    }
    let output = {};
    let strArr = str.split(" ");

    for(let i = 0; i < strArr.length; i++) {
        let word = strArr[i];
        if(output[word] === undefined) {
            output[word] = 1;
        } else {
            output[word] = output[word] + 1;
        }
    }
    return output;
}

console.log(wordCount(str));