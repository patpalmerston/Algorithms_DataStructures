// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// function reverse(str) {
//     let newb = [];
//     for (let i = str.length - 1; i >= 0; i--) {
//         newb.push(str[i]);
//     }
//     return newb.join('');
// }

// function reverse(str) {
//     let reversed = '';
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }

function reverse(str) {
    debugger;
    return str
        .split('')
        .reduce((emptyString, strChar) => emptyString + strChar, '');
}
reverse('Greetings!');

module.exports = reverse;
