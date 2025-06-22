/* Write a javascript function reverseSentence which will take 
Input as - "How are you doing today?" and return Output - "Today doing you are how?"
*/

const input = "How are you doing today?";

function reverseSentence(input) {
  
  // Removing the question mark
  const cleanedInput = input.replace(/[?]/g, '').trim();

  // Split into words
  let words = cleanedInput.split(' ');

  // Reverse the array of Words
  words = words.reverse();

  // Convert to string and format it - Make first word capitalized
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

  // Lowercase the rest of the words
  for(let i = 1; i < words.length; i++) {
     words[i] = words[i].toLowerCase();
  }

  // Join the words and add a question mark
  const output = words.join(' ') + '?';

  return output;
}

console.log(reverseSentence(input));