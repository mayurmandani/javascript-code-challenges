/* Write a function deserialize which takes Query String "page=1&limit=10&search=abc" and return Object { page:1, limit:10, search:"abc" } */

const query = "page=1&limit=10&search=abc"

function deserialize(queryString) {
  let output = Object.fromEntries(queryString.split('&').map(pair => {
    const [key, value] = pair.split('=');
    return [decodeURIComponent(key), decodeURIComponent(value)];
  })
);
  return output;
}

console.log(deserialize(query)); // { page: '1', limit: '10', search: 'abc' }