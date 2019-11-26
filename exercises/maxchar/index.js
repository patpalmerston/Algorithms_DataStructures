// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max = 0,
        maxChar = '';
    str.split('').forEach(char => {
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
}
// function maxChar(str) {}
// function maxChar(str) {}

module.exports = maxChar;
