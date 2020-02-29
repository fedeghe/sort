const counting = arr => {
    let i = 0,
        len = arr.length,
        count = [];

    for (; i < len; i++) {
        count[arr[i]] = typeof count[arr[i]] !== 'undefined'
            ? count[arr[i]] + 1
            : 1;
    }

    return count.reduce((acc, el, i) => {
        while(el--) acc.push(i)
        return acc
    }, [])
};

module.exports = a => counting(a)
