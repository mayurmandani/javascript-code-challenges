// What is the output of the following code?


const user = {
    name: "John",

    address: {
        city: "Surat",

        getDetails() {
            console.log(this.city);
            console.log(this.name);
        }
    }
};

user.address.getDetails();

/* 
Surat
undefined
*/