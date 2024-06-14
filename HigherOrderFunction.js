/* creating a clone of the map function */

function mapClone(arr, fn) {
    const nameList = [];
    for(let i = 0; i < arr.length; i++) {
        nameList.push(fn(arr[i]));
    }
    return nameList;
}

// mapClone takes in an array and a function fn, which is the callback.

const names = ['Emmanuel', 'John', 'James', 'Andrew'];

const nameLength = mapClone(names, function(item) {
        return item.length;
});

console.log(nameLength);