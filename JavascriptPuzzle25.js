

const infiniteCurry = (fn, seed) => {
    const reduceValue = (args, seedValue) => 
        args.reduce((acc, a) => {
            return fn.call(fn, acc, a);
        }, seedValue);

    const next = (...args) => {
        return (...x) => {
            if(!x.length) {
                return reduceValue(args, seed);
            }
            return next(...args, reduceValue(x, seed));
        };
    };
    return next();     
};

const add = infiniteCurry((x, y) => x + y, 0);


console.log(add(1)(2,3)(4,5,6)(7, 8, 9)());