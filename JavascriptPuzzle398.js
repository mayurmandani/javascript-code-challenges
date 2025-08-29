/* Write a Debounce Function - Debouncing delays execution until a pause happens. */

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const processChange = debounce(() => console.log('debounce function is executed'), 300);

processChange();