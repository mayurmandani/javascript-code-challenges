/* Given a string, reverse each word in the sentence */

let string = "Welcome to this Javascript Guide!";

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

let reverseSentence = reverseBySeparator(string, "");

console.log("reverseSentence", reverseSentence); // !ediuG tpircsavaJ siht ot emocleW

let reverseEachword = reverseBySeparator(reverseSentence, " ");

console.log("reverseEachword", reverseEachword); // emocleW ot siht tpircsavaJ !ediuG