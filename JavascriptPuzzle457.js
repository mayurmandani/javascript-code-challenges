/* What will be the output of the below code: */


let c = { greeting : 'Hello!' };

let d;

d = c; // Objects in JavaScript are assigned by reference hence d = c → both point to the same object.

c.greeting = 'Hey'; // Updating c.greeting = 'Hey' also reflects in d.

console.log(d.greeting);  // Hey

