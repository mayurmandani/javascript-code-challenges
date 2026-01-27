/* Write a example of deep copy in Javascript */

// deep copying means that value of the new variable is disconnected from the origional variable.

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway';  // disconnected
copiedPerson.address.city = 'Mountain View';  // disconnected

console.log(copiedPerson, "copiedPerson");
/* 
{
  firstName: 'Jane',
  lastName: 'Doe',
  address: {
    street: 'Amphitheatre Parkway',
    city: 'Mountain View',
    state: 'CA',
    country: 'USA'
  }
}
*/

console.log(person, " deepcopy example");
/* 
{
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st street',
    city: 'San Jose',
    state: 'CA',
    country: 'USA'
  }
}
*/
