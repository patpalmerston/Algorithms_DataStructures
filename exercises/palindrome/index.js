// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const newStr = str
//         .split('')
//         .reverse()
//         .join('');
//     if (str === newStr) {
//         return true;
//     } else {
//         return false;
//     }
//  // another boolean statement option
//  //return str === newStr
// }

// function palindrome(str) {
//     let newStr = [];
//     for (let i = str.length; i >= 0; i--) {
//         newStr.push(str[i]);
//     }
//     newStr = newStr.join('');

//     if (str === newStr) {
//         return true;
//     } else {
//         return false;
//     }
//     // another boolean statement option
//     //return str === newStr
// }

function palindrome(str) {
    // i is the index of the array we are checking against, we need to check the char against the opposite index of that char to make sure they match
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}
// function palindrome(str) {}

module.exports = palindrome;
