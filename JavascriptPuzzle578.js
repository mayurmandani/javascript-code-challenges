/*Implement Deep Clone Object cloning without using lodash. */

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const cloned = {};

  for (let key in obj) {
    cloned[key] = deepClone(obj[key]);
  }

  return cloned;
}

const user = {
  name: "Mayur",
  address: {
    city: "Chennai"
  }
};

const copied = deepClone(user);

console.log(copied);  // { name: 'Mayur', address: { city: 'Chennai' } }