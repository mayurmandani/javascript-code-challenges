/* Needs to log collection of books without duplicate
let friends = [{name: 'sanjay', books:['harry potter'], age:21}, {name: 'rohit', books:['harry potter', 'war and peace'], age:26}, 
{name: 'vijayakumar', books:['The shining', 'Romeo juliet'], age:22}]
and expected output is ['harry potter','war and peace', 'The shining', 'Romeo juliet'] 
*/


let friends = [{name: 'sanjay', books:['harry potter'], age:21}, 
{name: 'rohit', books:['harry potter', 'war and peace'], age:26}, 
{name: 'vijayakumar', books:['The shining', 'Romeo juliet'], age:22}];

function unique(arr) {
    let bookArr = [...arr];
    let booksList = bookArr.map(items => items.books);
    let bookCollection = booksList.flat(1);
    let output = [...new Set(bookCollection)];
    return output;
}

console.log(unique(friends)); // ['harry potter','war and peace', 'The shining', 'Romeo juliet']

