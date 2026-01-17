/* Write a function Arrays_sum in JavaScript that takes 2 array and calculate return the sum of array index value. */

let array1 = [1,6,4,7,3,5,1,7,8,9];
let array2 = [7,2,4,1,5,3,7,1];

function Arrays_sum(array1, array2) 
{
  const result = [];
  let ctr = 0;
  let x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum(array1, array2)); // [8, 8, 8, 8, 8, 8, 8, 8, 8, 9]