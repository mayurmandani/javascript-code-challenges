/* Write a JavaScript program that returns a subset of a string 

str = "dog"
Expected Output: ["d", "do", "dog", "o", "og", "g"]

*/

let str = "dog";

String.prototype.sub_String = function() {
  var subset = [];
  for(var m = 0; m < this.length; m++) {
    for(var n = m + 1; n < this.length + 1; n++) {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
}

console.log(str.sub_String());