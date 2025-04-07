/* Write a function in JavaScript that checks if a given string is a valid IPv4 address.  */

function isValidIPv4(str) {
  const octets = str.split(".");
  if (octets.length !== 4) return false;
  for( let i = 0; i < octets.length; i++) {
    const octet = octets[i];
    if(isNaN(octet) || octet <  0 || octet > 255) return false;
    if(octet.length > 1 && octet[0] === "0") return false;
  }
  return true;
}


console.log(isValidIPv4("192.168.0.1")); // true
console.log(isValidIPv4("256.0.0.0"));  //  false