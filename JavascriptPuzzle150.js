/* Removed the duplicate objects using the property name */

let users = [
  {name: "jayanth", age: 25, address: 'United States'},
  {name: "sandy", age: 27, address: 'Oman'},
  {name: "shiva", age: 26, address: 'Ireland'},
  {name: "jayanth", age: 28, address: 'United Kingdom'},
  {name: "sandy", age: 25, address: 'Japan'},
]

function uniqByKeepLast(data, key) {
  return [
    ...new Map(
      data.map(x => [key(x), x])).values()
  ]
}

console.log(uniqByKeepLast(users, it => it.name));