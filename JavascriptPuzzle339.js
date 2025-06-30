/* Count vowels and Consonants */

function countLetter(str) {
  const vowels = str.match(/[aeiou]/gi) || [];
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];

  return `Vowels: ${vowels.length}, Consonants: ${consonants.length}`;

}

console.log(countLetter("Hello World"));

// Vowels: 2, Consonants: 3