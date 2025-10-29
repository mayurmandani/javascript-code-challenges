/* Write a function deserializeSmart which takes Query String "page=1&limit=10&search=abc" and return numbers as Object { page:1, limit:10, search:"abc" } */

function deserializeSmart(queryString) {
  return Object.fromEntries(queryString.split('&').map(pair => {
    const [key, value] = pair.split('=');
    const decoded = decodeURIComponent(value);
    const num = Number(decoded);
    return [decodeURIComponent(key), isNaN(num) ? decoded: num];
  })
 );
}

const query = "page=1&limit=10&search=abc"
console.log(deserializeSmart(query)); // { page: 1, limit: 10, search: 'abc' }