/* JSON(JavaScript Object Notation) is a lightweight data format used for exchanging data between systems(commonly in APIs).
It looks similar to JavaScript objects, but it is just text(a string), not an actual object until parsed.
Keys must be double-quoted strings.
Values can only be string, number,boolean, null, array and another object.
Function and symbols are not allowed.
*/

let jsonString = '{"name": "Mayur", "age": 30, "isDeveloper": "true" }';

// Convert JSON -> JavaScript object

let obj = JSON.parse(jsonString);

console.log(obj.name); // Mayur
