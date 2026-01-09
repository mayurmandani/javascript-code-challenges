/* Sort the array based on name value in decending order */

const companies = [
  { id: "1", name: "Facebook" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Google" },
];

const decendingCompanyName = companies.sort((a, b) => (a.name > b.name ? -1 : 1));

console.log(decendingCompanyName);

/* 
[
  { id: '3', name: 'Google' },
  { id: '1', name: 'Facebook' },
  { id: '2', name: 'Apple' }
]
*/