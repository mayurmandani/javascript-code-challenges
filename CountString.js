let str = "lggbbad";
// output: { a: 1, b: 2, d: 1, g: 2, l: 1 }

function countString(str) {
    let result = {};
    let strCheck = str.split("").sort().join("");
    for(let i = 0; i < strCheck.length; i++) {
        let ch = strCheck.charAt(i);
        if(!result[ch]) {
            result[ch] = 1;
        } else {
            result[ch] += 1;
        }
    }
    return result;
}

console.log(countString(str));