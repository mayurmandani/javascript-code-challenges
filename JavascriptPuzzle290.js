/* Create a pyramid pattern using # */

function printPyramid(height) {
  for(let row = 1; row <= height; row++) {
    let spaces = ' '.repeat(height - row);
    let hashes = "#".repeat(2 * row - 1);
    console.log(spaces + hashes + spaces);
  }
 }

 printPyramid(3);

 /* output:
  #  
 ### 
#####
 */