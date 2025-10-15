/* What will be the output of the below code: */

function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('data'), 0));
}

const p = fetchData();

p. then(res => console.log('fetch then', res));

async function run() {
  console.log('async start');
  const res = await p;
  console.log('after await', res);
}

run();

/* 
async start
fetch then data
after await data
*/

