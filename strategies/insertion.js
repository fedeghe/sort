let insertion = (arr, fn) => {
    let length = arr.length,
        i = 1;
    for (; i < length; i++) {
        let key = arr[i],
            j = i - 1;
        while (j >= 0 && fn(arr[j], key)) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};

module.exports = (a, fn) => insertion(a, fn)
