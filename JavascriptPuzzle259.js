/* What will be the output of the following code? */

// Short-Circuit Evaluation for Default Values

const user = {name: null };   

const name = user.name ? user.name : 'Guest';  // (if user.name, it's not null, undefined, or false), it gets assigned otherwise "Guest" is used.

console.log(name); // Guest

// there’s a cleaner way! Use the || (OR) operator to set a default value:

const candidateName = user.name || 'Guest';

console.log(candidateName); // Guest

// using the ?? (nullish coalescing operator) to avoid unexpected behavior when user.name is 0 or "".

const interviewerName = user.name ?? "Guest";

console.log(interviewerName); // Guest