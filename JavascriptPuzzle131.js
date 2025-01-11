/* Write a function which checks if a given search text is present either in the beginning of the first name or the second name */

function validateName(str, searchText) {
  const regex = new RegExp("^(\\w*\\s)?" + searchText + "\\w*?", "i");
  return regex.test(str);
}

console.log(validateName("Mayur", "May"));
console.log(validateName("Peter Parker", "pet"));
console.log(validateName("Speter parker", "pet"));