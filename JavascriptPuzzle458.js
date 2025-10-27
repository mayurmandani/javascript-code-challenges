/* Write a function serialize Object { page:1, limit:10, search:"abc" } to Query String & Back "page=1&limit=10&search=abc" */


const obj = { page: 1, limit: 10, search: "abc" };

function serialize(obj)  {
  let output = Object.entries(obj).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
  return output;
}

console.log(serialize(obj)); // page=1&limit=10&search=abc