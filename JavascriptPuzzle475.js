/* convert URLSearchParams = "?page=3&sort=desc" to object as { page: "3", sort: "desc" } */

const queryObject = new URLSearchParams("?page=3&sort=desc");

console.log(queryObject);  // { 'page' => '3', 'sort' => 'desc' }
 
