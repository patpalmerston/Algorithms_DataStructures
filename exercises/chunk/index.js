// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const last = newArray[newArray.length - 1];
//         if (!last || last.length === size) {
//             newArray.push([array[i]]);
//         } else {
//             last.push(array[i]);
//         }
//     }
//     return newArray;
// }

// function chunk(array, size) {
//     const newArray = [];
//     let copied = [...array];
//     const numOfChildren = Math.ceil(copied.length / size);
//     for (let i = 0; i < numOfChildren; i++) {
//         newArray.push(copied.splice(0, size));
//     }
//     return newArray;
// }

function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

// function chunk(array, size) {}
// function chunk(array, size) {}

module.exports = chunk;
