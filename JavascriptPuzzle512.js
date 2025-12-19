/* Getters and setters (controlled access) -  Provide computed properties or validation. */

class Person {
    constructor(first, last) {
      this.first = first;
      this.last = last;
    }

    get fullName() {
      return `${this.first} ${this.last}`;
    }

    set fullName(name) {
      const [first, last] = name.split(' ');
      this.first = first;
      this.last = last || '';
    }

}