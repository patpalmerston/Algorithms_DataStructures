// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     let firstString;
//     let secondString;

//     firstString = stringA
//         .split('')
//         .sort()
//         .join('')
//         .replace(/[^\w]/g, '')
//         .toLowerCase();
//     secondString = stringB
//         .split('')
//         .sort()
//         .join('')
//         .replace(/[^\w]/g, '')
//         .toLowerCase();
//     if (firstString === secondString) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function anagrams(stringA, stringB) {
// this helper function can be inside or outside of the function
//     const sanatize = str => {
//         return str
//             .split('')
//             .sort()
//             .join('')
//             .replace(/[^\w]/g, '')
//             .toLowerCase();
//     };

//     return sanatize(stringA) == sanatize(stringB);
// }
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);

    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    // iterate over array with 'of' and 'in' for objects
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}
function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
// function anagrams(stringA, stringB) {}
// function anagrams(stringA, stringB) {}
// function anagrams(stringA, stringB) {}

module.exports = anagrams;
