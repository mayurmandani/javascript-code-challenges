/* Get the Longest String in an Array using JavaScript */

let arr = [
    "Computer Science",
    "Enviorment Science",
    "Forensic Science",
    "Criminology Science",
    "Forensic Molecular Biology Science",
    "Forensic Chemistry Science",
];

function longestString() {
    return arr.sort(function(a, b) {
        return b.length - a.length;
    })[0];
}


console.log(longestString());