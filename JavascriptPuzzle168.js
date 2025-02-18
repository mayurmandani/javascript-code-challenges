/* Removed the filedname "LOB" from the array */

let arr = [{
  name:"a",
  age:"v",
  Change :[
      {
          fieldname:"san"
      },
      {
          fieldname:"LOB"
      }
  ]
},
{
  name:"a123",
  age:"vs",
Change :[
      {
          fieldname:"san12"
      },
      {
          fieldname:"LOB"
      }
  ]
}];


let newArr = arr.map(({Change, ...rest}) => {
  return rest;
});

console.log(newArr);