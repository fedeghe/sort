const swap = require('./utils.js').swap;
const comb = arr => {
    let interval = Math.floor(arr.length / 1.3),
        len = arr.length;
    while (interval > 0) {
        for (let i = 0; i + interval < len; i += 1) {
            if (arr[i] > arr[i + interval]) {
                swap(arr, i, i + interval)
            }
        }
        interval = Math.floor(interval / 1.3);
    }
    return arr;
};

module.exports = a => comb(a)
