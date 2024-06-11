/* A debounce function ensures that a function is only called after a certain period of inactivity, 
improving performance  */

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener('resize', debounce(() => {
    console.log('Window resized');
}, 200));