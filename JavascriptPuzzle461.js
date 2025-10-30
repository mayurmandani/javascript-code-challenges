/* What will be the output of the below code: */

const obj = { x: 10, y: { z: 20 }};

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.y.z = 30;

console.log(obj.y.z); // 20 