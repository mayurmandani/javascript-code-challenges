/* Implement once(fn) — should run only once */

function once(fn) {
  let called = false;
  let result;

  return function(...args) {
    if(!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  }
}

/* Usage */

const init = once(() => {
  console.log('running init');
  return { started : true };
});

console.log(init()); // Logs "running init", returns { started: true }

console.log(init()); // no Log, returns same object
