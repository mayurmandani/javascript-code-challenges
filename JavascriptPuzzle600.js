/* Write a Javascript function that will accept a positive number and return converting word */


function numberToWords(num){

  if(num <= 0 || !Number.isInteger(num)) {
    throw new Error("Please Enter a Positive Integer");
  }

   const ones = [
    "", "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen",
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];

  const tens = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  function convert(n) {
    if(n < 20) return ones[n];
    if(n < 100) {
      return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
    }
    if(n < 1000) {
      return ones[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + convert(n % 100): "");
    }
    if(n < 100000) {
      return convert(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + convert(n % 1000): "");
    }
    return "Number Too Large";
  }

  return convert(num);
}

console.log(numberToWords(789)); // Seven Hundred Eighty Nine
console.log(numberToWords(25220)); // Twenty Five Thousand Two Hundred Twenty
console.log(numberToWords(99999)); // Ninety Nine Thousand Nine Hundred Ninety Nine