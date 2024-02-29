/* convert the array to string const letters = ['b', 'e', 'a', 'u', 't', 'y'] expected output is beauty
converst the array to reverse string const letters = ['b', 'e', 'a', 'u', 't', 'y'] expected output is ytuaeb */


const letters = ['b', 'e', 'a', 'u', 't', 'y'];

const word = letters.reduce((word, letter) => word + letter, '');
// callback goes from Left to Right

console.log("output", word);

const wordReversed = letters.reduceRight((word, letter) => word + letter, '');
// callback goes from Right to Left

console.log("output", wordReversed);