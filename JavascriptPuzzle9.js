/* destructuring in callback parameters allows you to directly access properties of objects passed to the callback,
making the code more concise */

const users = [ 
    { id: 1, name: 'Mayur'},
    {id : 2, name: 'Hari' },
];

users.forEach(({id, name}) => {
        console.log(`User ID: ${id}, User Name: ${name}`);
});