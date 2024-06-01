// Use short-circuit evalution to write concise conditions.

const isLoggedIn = true;

const user = isLoggedIn && { name: 'Jane', age: 25};

console.log(user);

// Short-circuit evalution uses the logical `&&` and `||` operators to simplify conditional expressions.