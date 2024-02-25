/* Write definition of sortByProperty
 Conditions:
1. We pass only key (object property_name) to sortByProperty(key) method.
2. sortByProperty() is executed over Array - e.g: employee.sortByProperty(key); where key can be name, age or city 
const employee = [
    { name: 'Sara', age: 22, city: 'Delhi' },
    { name: 'Mary', age: 32, city: 'Bangalore' },
    { name: 'Adam', age: 26, city: 'New York' },
  ];

Expected output:
[
  { name: 'Adam', age: 26, city: 'New York' },
  { name: 'Mary', age: 32, city: 'Bangalore'},
  { name: 'Sara', age: 22, city: 'Delhi' },
]; */

const employee = [
    { name: 'Sara', age: 22, city: 'Delhi' },
    { name: 'Mary', age: 32, city: 'Bangalore' },
    { name: 'Adam', age: 26, city: 'New York' },
  ];

  const sortByProperty = (employee, key) => {
    return employee.sort(function(a, b) {
        var x = a[key]; 
        var y = b[key];
        return ((x < y) ? - 1 : ((x > y) ? 1 : 0));
    });	
};

const sortedArray = sortByProperty(employee, 'name');
console.log("Sorted Array:", sortedArray);