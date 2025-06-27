/* Write a example of Converting a JSON Text to a JavaScript Object */

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

console.log(obj);

/* 
{
  employees: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Anna', lastName: 'Smith' },
    { firstName: 'Peter', lastName: 'Jones' }
  ]
}
*/