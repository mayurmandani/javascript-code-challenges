/* Write a example of shallow copy in Javascript */

// shallow copy means that some values are still connected to the origional variable.

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

 let copiedPerson = Object.assign({}, person);

 copiedPerson.firstName = 'Jane'; // disconnected

 copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
 copiedPerson.address.city = 'Mountain View' // connected

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

console.log(person, "shallow copy example");

/* 
{
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'Amphitheatre Parkway',
    city: 'Mountain View',
    state: 'CA',
    country: 'USA'
  }
} 
*/