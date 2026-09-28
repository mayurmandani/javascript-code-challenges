/* Write a ES6 javascript essentials by building a name formatter class NameFormatter with a constructor, methods for capitalization, and full-name and last-first formats */

class NameFormatter {
  constructor(firstName = "", lastName = "") {
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
  }
  capitalize(name) {
    if(!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  getFullName() {
    const first = this.capitalize(this.firstName);
    const last = this.capitalize(this.lastName);
    return `${first} ${last}`.trim();
  }

  getLastFirstName() {
    const first = this.capitalize(this.firstName);
    const last = this.capitalize(this.lastName);
    if(!last) return first;
    if(!first) return last;
    return `${last} ${first}`.trim();
  }

}

// Create an Object

const person = new NameFormatter(" mAyUr  ", " maNdANi ");

console.log(person.getFullName());  // Mayur Mandani

console.log(person.getLastFirstName());  // Mandani Mayur