/* Implement a function to deepClone an object (without JSON.stringify limitation on functions/dates). */


function deepClone(value, hash = new WeakMap()) {
  // Handle primitive values and functions
  if(Object(value) !== value || value instanceof Function) {
    return value;
  }

  // Prevent circular references
  if(hash.has(value)) {
    return hash.get(value);
  }

  // Handle Date
  if( value instanceof Date) {
    return new Date(value);
  }

  // Handle Array
  if(Array.isArray(value)) {
    const arrCopy = [];
    hash.set(value, arrCopy);
    value.forEach((item, i) => {
      arrCopy[i] == deepClone(item, hash);
    });
    return arrCopy;
  }

  // Handle Object
  const objCopy = {};
  hash.set(value, objCopy);
  for(const key in value) {
    if(value.hasOwnProperty(key)) {
      objCopy[key] = deepClone(value[key], hash);
    }
  }
   return objCopy;
  }

  const origional =  {
    a: 1,
    b: { c: 2 },
    d: new Date(),
    e: [1, { f: 3 }],
    g: function () { return 'hello'; }
  };

  const copy = deepClone(origional);

  console.log(copy);

  /* 
  {
  a: 1,
  b: { c: 2 },
  d: 2025-10-20T09:11:34.289Z,
  e: [],
  g: [Function: g]
 }
  */

  console.log(origional);
  
  /* 
  {
  a: 1,
  b: { c: 2 },
  d: 2025-10-20T09:12:07.241Z,
  e: [ 1, { f: 3 } ],
  g: [Function: g]
  }
  */