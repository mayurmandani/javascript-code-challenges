/* Write a function to generate N elements in an array 
where the element has the schema of name (generated using getName function)
and id which is randomly generated 8 digit number. */

function getName(index) {
        const randomNumber = Math.random() * Math.pow(10, 8) + index;
        const id = Math.floor(randomNumber);
        const str = id.toString();
        const alphabets = new Array(26).fill(0).map((ele, i) => String.fromCharCode(i + 97));
        let name = "";

        for(let i = 0; i< str.length; i++) {
        let tempRandom = Math.floor(Math.random() * 10);
        name = alphabets[i + tempRandom] + name;
        }

        let obj = {
                id: id,
                name: name.charAt(0).toUpperCase() + name.slice(1)
        }
        return obj;
}

function generateElement(n) {
        const arr = new Array(n).fill(0).map((ele, index) => getName(index));
        return arr;
}

console.log(generateElement(3));