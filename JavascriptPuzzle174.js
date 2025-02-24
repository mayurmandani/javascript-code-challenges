/* write a javascript function which takes string = "Every developer likes to learn typescript and javascript"  

and return string output as : "E3y d7r l3s to l3n t8t and j8t"          

*/

const str = "Every developer likes to learn typescript and javascript";

const createNumberOnStr = (word) => word[0] + (word.length - 2) + word[word.length - 1];

const output = str.split(" ").map((word) => (word.length >= 4 ? createNumberOnStr(word) : word)).join(" ");

console.log(output);