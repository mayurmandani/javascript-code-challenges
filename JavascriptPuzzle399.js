/* Throttle Function - It ensures that the wrapped function is called at most once within a specified time interval, 
regardless of how many times the event triggering it occurs.*/

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if(!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const handleScroll = throttle(() => console.log('Scrolling!'), 200);

handleScroll();