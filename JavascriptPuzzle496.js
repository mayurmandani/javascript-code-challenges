/* What will be the output of the following code? */

console.log("start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        }, 1000);
    });
}

function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${video} video`);
        }, 100);
    });
}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the ${video} video`);
        }, 500);
    });
}

Promise.any([
    importantAction("Roadside Coder"),
    likeTheVideo("Javascript Interview Questions"),
    shareTheVideo("Javascript Interview Questions"),
])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error("Error: Promises failed", err);
});

console.log("stop");

/* 
start
stop
Like the Javascript Interview Questions video
*/