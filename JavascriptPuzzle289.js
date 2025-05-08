/* Write a promise and execute with chaining in promise. */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = {
         name: "mayur"
      }
            resolve(data);
    }, 1000);
})


promise
.then(res => console.log(res))
.catch(e => console.error(e));