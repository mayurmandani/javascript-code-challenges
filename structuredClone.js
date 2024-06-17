/* Create the deep copy using the structuredClone() */

const user = {
    name: 'Mayur Mandani',
    userName: 'mayurmandani',
    sports: ['badminton', 'cricket'],
};

const copiedUser = structuredClone(user);

copiedUser.sports.push("tennis");

console.log(user, "origional object user");

console.log(copiedUser, "copiedUser");