/* Provided a 2D matrix with the same number of rows and columns. You have to rotate that matrix in the clockwise direction.

let matrix = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
]; 

and output is [[6, 3, 0],[7, 4, 1],[8, 5, 2]];

*/

let matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];


const clockWise = (matrix) => {
    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < r; c++) {
            let temp = matrix[r][c];
            matrix[r][c] = matrix[c][r];
            matrix[c][r] = temp;
        }
    }

    let finalMatrix = matrix.map((r) => r.reverse());
    return finalMatrix;
}

console.log(clockWise(matrix));