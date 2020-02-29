const merge = (left, right, fn) => {
    let res = [],
        leftI = 0, rightI = 0,
        leftL = left.length, rightL = right.length;

    while (leftI < leftL && rightI < rightL) {
        if (fn(left[leftI], right[rightI])) {
            res.push(left[leftI]);
            leftI++;
        } else {
            res.push(right[rightI]);
            rightI++;
        }
    }
    return res
        .concat(left.slice(leftI))
        .concat(right.slice(rightI));
}
const mergeSort = (arr, fn) => {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = arr.length >>> 1,
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(
        mergeSort(left, fn),
        mergeSort(right, fn),
        fn
    );
}

module.exports = (arr, fn) => mergeSort(arr, fn)