/* Encapsulation hides the internal state of an object and restricts direct access to it,
promoting data integrity and security */

class BankAccount {
    #balance = 0; // Private filed

    // public methods to interact with balance
    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if(amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log('Insufficient funds');
        }
    }

    getBalance() {
        return this.#balance;
    }

}

const account = new BankAccount(0);
account.deposit(100);
console.log(account.getBalance());
account.withdraw(75);
console.log(account.getBalance());