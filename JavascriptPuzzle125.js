/* Remove array value empty string, null and undefined from array. */

let countries = ["India", "", "Nepal", null, undefined, "USA"];

// Removed empty string value ""
let emptyStr = countries.splice(1,1);
console.log(emptyStr);

// Removed null and undefined value
let arrFiltered = countries.filter(Boolean);
console.table(arrFiltered);