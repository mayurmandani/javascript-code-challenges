/* sort the array based on dob in decending order */

const users = [
    { name: "Shyam", email: "shyam@gmail.com", dob:"22 aug 1990"},
    { name: "Bob", email: "bob32@gmail.com", dob:"12 july 1986"},
    { name: "Mayur", email: "mayur@gmail.com", dob:"22 aug 1987"},
    { name: "Jai", email: "jai87@gmail.com", dob:"05 april 1992"},  
  ];

  customSort = (a, b) => {
     const dateA = new Date(a.dob);
     const dateB = new Date(b.dob);
     return dateB - dateA;
  };

  console.log(users.sort(customSort));