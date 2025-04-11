/* Write a JavaScript program to replace multiple object keys' names with the values provided. */

const rename_keys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );


const obj = {name: 'Mayur', job: 'hero', shoeSize: 151 };

console.log("Origional Object", obj);

const result = rename_keys({ name: 'firstName', job: 'Actor', shoeSize: 'employee_id'}, obj);

console.log("New Object", result);
