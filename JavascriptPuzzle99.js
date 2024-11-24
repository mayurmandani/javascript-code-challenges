/*Finding the Longest Word in a Sentence with JavaScript */

const longestWord = (sentence) => sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');

const inputSentence = 'The quick brown fox jumps over the lazy dog';

const result4 = longestWord(inputSentence);

console.log(result4);