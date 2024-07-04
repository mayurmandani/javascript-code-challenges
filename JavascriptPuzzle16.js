/* Write JavaScript Program to Check for Palindrome Number */

function palindromeCheck(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    if(numStr === result) {
       console.log(` ${numStr} is palindrome number`);
       return true;
    } else {
      console.log(` ${numStr} is not palindrome number`);
      return false;
    }
}

console.log(palindromeCheck(121));
console.log(palindromeCheck(123));

