/* Removed Vowel from the string, let str = "olleH morf ruyaM" and expected output = "llH mrf ryM" */ 


let str = "olleH morf ruyaM";

function removeVowelString(str) {
  let result = "";
  let vowels = ["a", "e", "i", "o", "u"];
  let len = str.length;

  for(let i = 0; i < len; i++) {
    if(!vowels.includes(str[i])) {
      result = result + str[i];
    }
  }
  return result;
}

console.log(removeVowelString(str)); // llH mrf ryM