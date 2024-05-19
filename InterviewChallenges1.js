// Add the country property and it's value 'india' for below object. 
let obj1 = [
    {id:1, name:'Rahul', city:'hyderabad'},
    {id:2, name:'Priyanka', city:'gurugram'},
    {id:3, name:'Niti', city:'Bengaluru'},
    {id:4, name:'Javed', city:'chennai'},
    {id:5, name:'Bhavana', city:'mumbai'}
    ];

const addCountry = obj1.map((item) => {
    return item.country = 'india';
});

console.table(obj1);