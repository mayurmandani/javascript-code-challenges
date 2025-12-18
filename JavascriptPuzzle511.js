/* Encapsulation - controlling access to internals Hide implementation details. Modern JS supports private fields; you can also use closures. */

class BankAccount {
  #balace = 0; // private

  constructor(initial = 0) {
    this.#balace = initial;
  }
  deposit(amount) {
    this.#balace += amount; 
  }

  getBalance() {
    return this.#balace;
  }
}

const acc = new BankAccount(100);

acc.deposit(50);

console.log(acc.getBalance());  // 150