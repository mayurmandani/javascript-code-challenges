/* Custom myFind methods using filter behavior */

Array.prototype.myFind = function(callback, thisArg) {
  
  if (typeof callback !== 'function') {
    throw new TypeError(callback + " is not a function");
  }

  const filtered = this.filter((item, index, array) => {
        return callback.call(thisArg, item, index, array);
  });

  return filtered.length > 0 ? filtered[0] : undefined;

};

const users =  [
  { id: 1, name: "Mayur" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Rahul" }
];

const user = users.myFind(u => u.name === "Amit");

console.log(user); // { id: 2, name: 'Amit' }