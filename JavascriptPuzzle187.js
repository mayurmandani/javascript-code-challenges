/* Write a JavaScript program that returns a subset of a string 

let str = "dog"
output = ["d", "do", "dog", "o", "og", "g"];

*/

let str = "dog";

String.prototype.sub_String = function () {
  let subset = [];
  for(let m = 0; m < this.length; m++) {
    for(let n = m + 1; n < this.length + 1; n++) {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log(str.sub_String());