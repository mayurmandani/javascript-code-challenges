/* Write a function findDuplicateNumbers, it will take Input = [1,1,1,1,2,2,3,3,3,3,4,5,5,5,5] and return Output = [1,1,1,2,3,3,3,5,5,5] */

let Input=[1,1,1,1,2,2,3,3,3,3,4,5,5,5,5]; 

function findDuplicateNumbers(Input) {
    let duplicateNumbers = Input.filter((item, index) =>  {
        return Input.indexOf(item) !== index;
    });
    return duplicateNumbers;
}

const output = findDuplicateNumbers(Input);

console.log(output);  // [1, 1, 1, 2, 3, 3, 3, 5, 5, 5]

