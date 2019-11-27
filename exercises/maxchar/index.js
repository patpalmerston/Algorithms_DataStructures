// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     let max = 0,
//         maxChar = '';
//     str.split('').forEach(char => {
//         if (str.split(char).length > max) {
//             max = str.split(char).length;
//             maxChar = char;
//         }
//     });
//     return maxChar;
// }
function maxChar(str) {
    let obj = {};
    let max = 0;
    let charMax = '';

    for (let char of str) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }

    for (let char in obj) {
        if (obj[char] > max) {
            max = obj[char];
            charMax = char;
        }
    }
    return charMax;
}
// function maxChar(str) {}

module.exports = maxChar;
