// What is the output of the following code?

const person = {
    name: "Ram",
    age: 30
};

const getObjectEntries = (obj) => {
     const objKeys = Object.keys(obj);
     const result = objKeys.map((key) => {
        const value = obj[key];
        return [key, value];
     });

     return result;
}

const res = getObjectEntries(person);

console.log(res);  // [ [ 'name', 'Ram' ], [ 'age', 30 ] ]