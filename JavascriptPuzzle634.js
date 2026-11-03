// What is the output of the following code?

const original = {
  name: "Alex",
  address: {
    city: "Surat"
  }
};

const copy = { ...original };

copy.name = "Sam";
copy.address.city = "Mumbai";

console.log(original.name);  // Alex
console.log(original.address.city); // Mumbai
console.log(copy === original); // false
console.log(copy.address === original.address); // true