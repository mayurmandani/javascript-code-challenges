/* Implement function countChars() that returns a maps characters to numbers of occurrences in string. 
let str = "AaBccc";
output : [ A: 1, a: 1, B: 1, c: 3 ]
*/

let str = "AaBccc";

function countChars(str) {
  var uchars = [];
  str.replace(/\S/g, function (l) {
    uchars[l] = isNaN(uchars[l]) ? 1 : uchars[l] + 1;
  });
  return uchars;
}

console.log(countChars('AaBccc'));