// What is the output of the following code?

const arrayJson = [
    { "name" : "a", "department": "a" },
    { "name" : "b", "department": "a" },
    { "name" : "c", "department": "b" }
];


const outputArray = arrayJson.reduce((result, { name, department }) => {
  const departmentObj = result.find((item) => item.department === department);
    if (departmentObj) {
        departmentObj.employee.push(name);
    } 
    else {
        result.push({ department, employee: [name] });
    }
      return result;
  }, []);
        
console.log(outputArray)

/* 
[
  { department: 'a', employee: [ 'a', 'b' ] },
  { department: 'b', employee: [ 'c' ] }
]
*/