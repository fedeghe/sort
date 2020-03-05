const counting = (arr, fn) => {
    let i = 0,
        len = arr.length,
        count = [];

    for (; i < len; i++) {
        let j = fn(arr[i])
        count[j] = count[j]
            ? {count: count[j].count + 1, obj: count[j].obj}
            : {count: 1, obj: arr[i]};
    }
    return count.reduce((acc, el) => {
        while(el.count--) acc.push(el.obj)
        return acc
    }, [])
};

module.exports = (a, fn) => counting(a, fn)
