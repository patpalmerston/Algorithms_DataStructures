// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let newN = n
        .toString()
        .split('')
        .reverse()
        .join('');
    // Math.sign returns a positive or negative value of 1/-1 and then we times that value against the new Int from parseInt to give it a positive or negative value.
    return Math.sign(n) * parseInt(newN);
}

// function reverseInt(n) {
//   return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''))
//  }

// function reverseInt(n) {
//     const reversed = n
//         .toString()
//         .split('')
//         .reverse()
//         .join('');
//     if (n < 0) {
//         return parseInt(reversed) * -1;
//     } else {
//         return parseInt(reversed);
//     }
// }

module.exports = reverseInt;
