/* write a onceAsync function — handles concurrent calls safely (returns same pending promise) */

function onceAsync(fn) {
  let called = false;
  let promise;

  return function(...args) {
    if(!called) {
      called = true;
      promise = Promise.resolve().then(() => fn.apply(this,args));
    }
    return promise;
  };
}

const fetchConfig = onceAsync(async () => {
    console.log('fetching config...');
    await new Promise(r => setTimeout(r, 1000));
    return { env: 'prod' };
});

fetchConfig().then(console.log); // fetching config... { env: 'prod' }
fetchConfig().then(console.log);  // { env: 'prod' }