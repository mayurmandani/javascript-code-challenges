/* Implement a Throttle function that limits the number of times a function can be called in a given time window. */

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if(!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

