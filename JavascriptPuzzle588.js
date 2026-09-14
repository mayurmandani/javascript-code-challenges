/* Shallow Copy in Javascript */

const user = {
  name: "Mayur",
  address: {
    city: "Surat",
  }
};

const usercopy = {...user};

usercopy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai