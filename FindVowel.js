/*  write a function that takes a string as an argument and returns the number of vowels contained in that string */

const findVowel = (str) => {
        let count = 0;
        let vowel = ['a', 'e', 'i', 'o', 'u'];
        for(let char of str.toLowerCase()) {
            if(vowel.includes(char)) {
                count++;
            }
        }
        return count;
}

console.log(findVowel("I Like my Native Place"));
console.log(findVowel("Why"));