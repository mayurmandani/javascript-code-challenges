/* Throttle Function - */

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