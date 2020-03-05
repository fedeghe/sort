const swap = require('./utils').swap

const sbubbleSort = (arr, fn) => {
    let i = 0,
        len = arr.length;
    while(i < len-1) {
        let j = i;
        while(j >= 0 && fn(arr[j], arr[j+1])) {
            swap(arr, j, j + 1);
            j--
        }
        i++;
    }
    return arr;
};

module.exports = sbubbleSort