/* Create a debounce function that delays execution until the user stops triggering the event. */

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage
const search = debounce((text) => {
  console.log("Searching:", text);
}, 500);

search("r");
search("reac");
search("rea");
search("react");