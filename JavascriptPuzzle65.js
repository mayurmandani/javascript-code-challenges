/* Write the example of using the call and apply method */

var pokemon = {
    firstname: 'Mayur',
    lastname: 'Mandani',
    getPokeName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

// call expects all parameters to be passed in individully
// Accepts additional parameters as well
// Executes the function it was called upon right away
// call() method does not make a copy of the function it is being called on.
pokemonName.call(pokemon, 'paratha', 'music');
// apply() expects an array of all of our parameters
pokemonName.apply(pokemon, ['poha', 'reading']);

