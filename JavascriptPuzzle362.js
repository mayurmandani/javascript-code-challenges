/* Define a property on an instance that exists on the prototype, it shadows the prototype property */

function User() {}

User.prototype.role= "guest";

const admin = new User();

admin.role= "admin";
console.log(admin.role); // admin

console.log(admin.hasOwnProperty("role"));  // true,  if coming from object

delete admin.role;
console.log(admin.role); // guest

console.log(admin.hasOwnProperty("role"));  // false if coming from prototype
