/* Sort the array name property value in desending order */

const companies = [
  { id: "1", name: "Facebook" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Google" },
];

let output = companies.sort((a, b) => (a.name > b.name ? -1 : 1));

console.log(output);
