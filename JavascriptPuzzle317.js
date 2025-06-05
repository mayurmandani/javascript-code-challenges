/* Chunk an Array -  Divide an array into smaller chunks of a specified size. */

function chunk(array, size) {
    const output = [];
    for(let i = 0; i < array.length; i += size) {
      output.push(array.slice(i, i + size));
    }
    return output;
}

let array = [1, 2, 3, 4, 5, 6, 7];

console.log(chunk(array, 4));  // [ [ 1, 2, 3, 4 ], [ 5, 6, 7 ] ]