/* Remove duplicates from an array and return unique values in O(n) complexity */

let array =  [1, 1, 5, 6, 7, 7, 7, 8, 9, 3, 4, 4, 4];

function Unique(array) {
   let items = {};
   array.forEach((item) => {
    if(!items[item])
      items[item] = item;
    
   }); 
   return Object.values(items);
}

console.log(Unique(array));  //  [ 1, 3, 4, 5, 6, 7, 8, 9];