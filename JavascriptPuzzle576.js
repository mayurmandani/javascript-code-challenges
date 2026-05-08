/* Write a JavaScript currencyConverter function which will take a amount and currency as parameter. It will check first currency type and return converted amount INR value */

function currencyConverter(amount, currency) {
  // conversion rates
  const INR_RATE = 94.47;   // 1 USD = 94.47 INR
  const DINAR_RATE = 25.77; // 1 DINAR = 25.77 INR

  if (currency.toUpperCase() === "INR") {
    return `${amount} USD = ${(amount * INR_RATE).toFixed(2)} INR`;
  } else if (currency.toUpperCase() === "DINAR") {
    return `${amount} DINAR = ${(amount * DINAR_RATE).toFixed(2)} INR`;
  } else {
    return "Unsupported currency. Use INR or DINAR.";
  }
}

console.log(currencyConverter(10, "INR"));  // 10 USD = 944.70 INR
console.log(currencyConverter(10, "DINAR")); // 10 DINAR = 257.70 INR