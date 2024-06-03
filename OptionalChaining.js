// Use optional chaining to safely access nested properties.

const user = { profile: { name: 'Mayur'}};

const userName = user?.profile?.name;

console.log(userName);

// Optional chaining allows you to safely access nested properties without having to explicity check each level of the chain for `null` or `undefined`.



