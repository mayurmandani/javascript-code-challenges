/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order */

// Input : "()", Output: true
// Input: "()[]{}", Output: true

const isValid = s => {
    const stack = [];
    const pairs = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    };

    for(const char of s) {
        if(pairs[char]) {
            stack.push(char);
        } else if (pairs[stack.pop()] !== char) {
            return false;
        }
    }
    return !stack.length;
}

// console.log(isValid("()"));
console.log(isValid("()[]{}"));