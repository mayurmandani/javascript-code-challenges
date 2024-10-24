/* Write a function to count word occurance in String for an example
("Madam") -> "a"
("civic") -> "c"
("HellloL223LLL") -> "L"
12345 -> its should be string */

const stringOccurance = (str) => {
     if(str.length === 0) {
        return "Sting should not be Empty";
     }
     if(typeof str !== 'string') {
        return "its should be string";
     }

     const occurance_Map = new Map()

     for(const char of str) {
        occurance_Map.set(char, occurance_Map.get(char) + 1 || 1)
     }

     // find the max char from the occurance map
     let max_char = {char : '', occur: -Infinity }

     for(const [char, occur] of occurance_Map) {
        if(occur > max_char.occur) {
            max_char = {char, occur}
        }
     }
     return max_char.char;
}

console.log(stringOccurance("Madam"));
console.log(stringOccurance("civic"));
console.log(stringOccurance("HellloL223LLL"));
console.log(stringOccurance(12345));