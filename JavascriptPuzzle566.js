// What is the output of the following code?

const x = Promise.resolve(1);

async function foo() {
  const a = x;
  const b = await x;
  return [a, b];
}

foo().then(console.log);  // [ Promise { 1 }, 1 ]