/* A throttle function ensures that a function is only called at most once in a specified period,
improving performance for frequently firing events. */

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if(!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if(Date.now() - lastRan >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

window.addEventListener('scroll', throttle(() => {
    console.log('Window scrolled');
}, 200));