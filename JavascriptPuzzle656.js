// What is the output of the following code?

const original = {
    name: "Mayur",
    address: {
        city: "Surat"
    }
};

const copy = structuredClone(original);

copy.address.city = "Mumbai";

console.log(original.address.city);  // Surat
console.log(copy.address.city);  // Mumbai

