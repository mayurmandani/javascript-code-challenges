/* Extract a Number from a String with Javascript */


const s = "code12345hello";
let [match] = s.match(/(\d+)/);

match = parseInt(match);

console.log(match);