/* Debouncing delays execution until a pause happens. */

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const processChange = debounce(() => console.log('Saved!'), 300);

console.log(processChange()); // Saved!