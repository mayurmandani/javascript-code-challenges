/* const arr = [{ "name" : "a", "department": "a"},{ "name" : "b", "department": "a"},{ "name" : "c", "department": "b"}]
output = [{ "department" : "a", "employee": ["a","b"]}, {"department" : "b","employee": ["c"]}]
*/

const arr = [{ "name" : "a", "department": "a"},{ "name" : "b", "department": "a"},{ "name" : "c", "department": "b"}];

const outputArray = arr.reduce((result, {name, department}) => {
    const departmentObj = result.find((item) => item.department === department);
    if(departmentObj) {
        departmentObj.employee.push(name);
    } else {
        result.push({department, employee: [name]});
    }
    return result;

}, []);

console.log(outputArray, "outputArray");