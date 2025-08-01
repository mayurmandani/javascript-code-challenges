/* Count the each letter of string  */

let str = "My name is Mayur Mandani";

function countLetter(str) {
  let result = {};
  let newStr = str.split(" ").join("");
  
  for(let i = 0; i < newStr.length; i++) {
      let ch = newStr[i];
      if(!result[ch]) {
         result[ch] = 1;
      } else {
        result[ch] = result[ch] + 1;
      }
  }
  return result;
}

console.log(countLetter(str));

/* { M: 3, a: 4, d: 1, e: 1, i: 2, m: 1, n: 3, r: 1, s: 1, u: 1, y: 2 } */