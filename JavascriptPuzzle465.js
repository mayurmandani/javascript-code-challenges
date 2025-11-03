/* Deep clone an object */

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}

const obj = {
  name: "mayur",
  city: "surat"
};

const deepCopy = deepClone(obj);

deepCopy.name = "Kajal";

console.log(deepCopy);  // { name: 'Kajal', city: 'surat' }

console.log(obj); // { name: 'mayur', city: 'surat' }