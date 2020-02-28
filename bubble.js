const swap = require('./utils.js').swap

const bubbleSort = (arr, fn) => {
    let len = arr.length,
        swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (fn(arr[i], arr[i + 1])) {
                swap(arr, i, i + 1)
                swapped = true
            }
        }
    } while (swapped);
    return arr;
};

module.exports = bubbleSort