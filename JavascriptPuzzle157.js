/* Write the sortByProperty function, Which will take two parameter arr and key, it will return sorted key value data */
const employee = [
  { name: 'Sara', age: 22, city: 'Delhi' },
  { name: 'Mary', age: 32, city: 'Bangalore' },
  { name: 'Adam', age: 26, city: 'New York' },
];


  const sortByProperty = (arr, key) => {
    return arr.sort((a, b) => {
      if(a[key] < b [key]) {
        return -1;
      }
      if(a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
};  

sortedNameData = sortByProperty(employee, 'name');
console.log(sortedNameData);

sortedCityData = sortByProperty(employee, 'city');
console.log(sortedCityData);

sortedAgeData = sortByProperty(employee, 'age');
console.log(sortedAgeData);