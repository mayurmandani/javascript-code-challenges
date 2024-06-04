// cloning or merge the Objects using the Object.assign()


const target = { name: "Mayur" };
const source = { address: "Vadodara" };

const mergedObj = Object.assign(target, source);

console.log(mergedObj);