/* Merge the two array and sort the value in asending order without using the in built methods of Javascript */
let arr = [ 2,5,7,9,1]; 
let arr2 = [ 3,4,6,8,0];

function mergeArr(arr, arr2) {
	let output = [];
  for(let i = 0; i < arr.length; i++) {
        output.push(arr[i]);
  }
  for(let i = 0; i < arr2.length; i++) {
    output.push(arr2[i]);
  }
  return output;
}

const array = mergeArr(arr, arr2); 
console.log(array);  // Merged the two array

function bubbleSort(array) {
  var done = false;
  while(!done) {
    done = true;
    for (var i = 1; i < array.length; i = i + 1) {
      if(array[i - 1] > array[i]) {
         done = false;
         var tmp = array [i - 1];
         array[i - 1] = array[i];
         array[i] = tmp; 
      }
    }
  }
  return array;
}

console.log(bubbleSort(array)); // sorting the value in asending order using bubbleSort function