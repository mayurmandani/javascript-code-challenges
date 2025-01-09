/* Write a function which returns a list of elements which contains at least one character as digit 
for an example 
Input array is ['1a', 'a', '2b', 'b'] and expected output ['1a', '2b']
Input array is ['abc', 'ab10c', 'a10bc', 'bcd'] and expected output ['ab10c', 'a10bc'] */


function numInStr(mixArray) {
  return mixArray.filter((value) => {
    return /[0-9]/.test(value);
  });
}

console.log(numInStr(['1a', 'a', '2b', 'b']));
console.log((['abc', 'ab10c', 'a10bc', 'bcd']));