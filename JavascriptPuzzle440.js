/* Display response time of the API  */

async function checkResponseTime() {
  const start = Date.now();
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const end = Date.now();
  console.log(`Responsed Time: ${end - start} ms`);
}

checkResponseTime();  // Responsed Time: 661 ms

