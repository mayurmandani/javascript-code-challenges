/* Promise -  JavaScript Promises are essential for handling asynchronous operations, like data fetching or waiting for a set of tasks to complete. 
They allow you to write cleaner, more readable code compared to using callbacks alone.
*/

let fetchData = new Promise((resolve, reject) => {
      let success = true;
      if(success) {
        resolve('Data fetched successfully!');
      } else {
        reject('Data fetch failed');
      }
});

fetchData.then(response => {
    console.log(response);   //  Data fetched successfully!
}).catch( error => {
  console.log(error);
});