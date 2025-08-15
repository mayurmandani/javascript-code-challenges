/* Pascal's Triangle */


function generatePascal(n) {
  const triangle = [];
  for(let row = 0; row < n; row++) {
    triangle[row] = [1];
    for(let col = 1; col < row; col++) {
      triangle[row][col] = triangle[row- 1][col -1] + triangle[row - 1][col];
    }
    if(row) {
      triangle[row].push(1);
    }
  }
  return triangle.map(row => row.join(' ')).join('\n');
}

console.log(generatePascal(5));

/* 
1        
1 1      
1 2 1    
1 3 3 1  
1 4 6 4 1
*/ 