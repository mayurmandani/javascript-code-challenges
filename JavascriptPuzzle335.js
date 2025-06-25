/* Debouncing - Debouncing is a technique used to limit the rate at which a function is executed. 
It’s particularly useful for events like resizing a window or typing in a search bar. */

function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

const searchHandler = debounce(function() {
  console.log('Searching...');
}, 500);

// document.getElementById('search').addEventListener('input', searchHandler);