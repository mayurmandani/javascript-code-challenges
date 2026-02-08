/* Implicit Binding (Object) - Borrowing Methods(Code Reusability) */

const player1 = {
  name: "Mayur",
  score: 0
};

const palyer2= {
  name: "Ravi",
  score: 0
};

function addScore(points) {
  this.score += points;
  return (`${this.name} now has ${this.score} points`);
}

// "Borrow" the function for Mayur
console.log(addScore.call(player1, 100)); // Mayur now has 100 points

// "Borrow" the function for Ravi
console.log(addScore.call(palyer2, 50)); // Ravi now has 50 points
