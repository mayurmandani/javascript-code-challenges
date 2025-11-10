/* write a onceWithReset — run once but allow explicit reset 
- Useful when you want the “run-once” behavior but occasionally reset it.
*/

function onceWithReset(fn) {
  let called = false;
  let result;

  const wrapper = function (...args) {
    if(!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };

  wrapper.reset = () => {
    called = false;
    result = undefined;
  };
  
  return wrapper;
}

const doOne = onceWithReset(() => console.log('only once'));

doOne(); // only once

doOne();

doOne.reset();

doOne(); // only once