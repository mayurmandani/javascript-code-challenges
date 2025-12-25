/* Write a function bubbleSort which takes array and return sorting value in ascending numbers of array */

function bubbleSort(array) { 
    var done = false; 
    while (!done) { 
      done = true; 
      for (var i = 1; i < array.length; i += 1) { 
        if (array[i - 1] > array[i]) { 
          done = false; 
          var tmp = array[i - 1]; 
          array[i - 1] = array[i]; 
          array[i] = tmp; 
        } 
      } 
    } 
    return array; 
  }

let numbers = [0, -1, -1, 4, -2, 6, 3]; 
bubbleSort(numbers); 
console.log(numbers);  // [-2,-1,-1,0,3,4,6]