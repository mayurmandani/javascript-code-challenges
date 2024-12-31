/* Assign addressLocality into a variable localAddress using destructuring  */

let obj = {
  firstName: "Ravi",
  lastName: "kumar",
  age: 37,
  address: {
    addressLocality: "Santhe katte",
    addressRegion: "Udupi",
    state: "Karnatka",
    postalCode: 576105
  },
  email: "ravi@gmail.com",
  jobTitle: "Software Engineer",
  birthDate: "1979-10-12",
  gender: "male",
  telephone: "+91 90000000",
  socialMediaAccounts: [
    "www.facebook.com/ravi1",
    "www.linkedin.com/ravi1",
    "www.twitter.com/ravi1"
  ]
};

let { address: { addressLocality : localAddress}} = obj;

console.log(localAddress);