/* 

Most Frequent Character - Identify the character that appears most frequently in a string. 
const input = "ABBAAdBd5BBB"; expected output = 'B';

*/

function mostFrequentChar(str) {
  let charCount = {};
  let maxChar = '';
  let maxCount = 0;

  for(let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    if(charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }
  return maxChar;
}


const input = "ABBAAdBd5BBB";

const output = mostFrequentChar(input);

console.log(output); // 'B'