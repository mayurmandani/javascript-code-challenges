/* Write a function getAllNames() which will take input as array and return all name from them */

const data = [ 
{
   name: 'Anurag',
   children: [
       {
         name: 'Prem',
         children: [
             {
               name: 'Kumar'
             }
           ]
       },
       {
         name: 'Sita',
         children: null
       }
     ]
},
{
   name: 'Mohan'
}
];


function getAllNames(arr) {
  let result = [];
    function traverse(nodeArray) {
      for(let node of nodeArray) {
        result.push(node.name); // add the current name
        if(node.children && Array.isArray(node.children)) {
          traverse(node.children); // recursive call
        } 
      }
    }
    traverse(arr);
  return result;
}

console.log(getAllNames(data));  // [ 'Anurag', 'Prem', 'Kumar', 'Sita', 'Mohan' ]


