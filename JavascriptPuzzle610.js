// What is the output of the following code?

const user = {
  name: "Mayur",
  address: {
    city: "Ahmedabad"
  }
};

const copyUser = {...user};

copyUser.address.city = "Surat";

console.log(user.address.city);  // Surat