/* let str = "Hi i am a user since 2019"; 
    output = ""iH i ma a resu ecnis 9102"";
*/

let str = "Hi i am a user since 2019"; 

const reverseWordStr = (str) => {
    let output = str.split(" ").map(s => s.split("").reverse().join("")).join(" ");
    return output;
}

console.log(reverseWordStr(str));