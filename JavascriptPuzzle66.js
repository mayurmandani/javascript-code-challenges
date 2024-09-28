/* Write the example of using the bind method */

// bind method creates a new function when called, it's this keyword set to the provided value.

var pokemon = {
    firstname: 'Mayur',
    lastname: 'Mandani',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function (snack, hobby) {
    console.log(this.getPokeName() + ' I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

// creates new object and binds pokemon. 'this' of pokemon === pokemon now
var logPokeman = pokemonName.bind(pokemon);
// Js engine is creating a new pokemonName instance and binding pokemon as its this variable.
// it copies the pokemonName function, it is able to call logPokemon(), although it wasn't on the pokemon object initially.
// it will now recognizes its properties(Mayur and Mandani) and its methods.

logPokeman('paratha', 'music');

