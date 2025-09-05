/* build a query string from object */

const params = { q: 'react', page: 2 };

const queryString = new URLSearchParams(params).toString();

console.log(queryString); // q=react&page=2