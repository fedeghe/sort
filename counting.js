const counting = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = []; //Array.from({length: max-min}, () => 0);
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

module.exports = (a, min, max) => counting(a, min, max)
