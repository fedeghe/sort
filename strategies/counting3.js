const counting = arr => {
    let i = -1,
        len = arr.length,
        count = [],
        res = [];

    while (++i < len) {
        count[arr[i]] = count[arr[i]]
            ? count[arr[i]] + 1
            : 1;
    }
    len = count.length;
    for (i = 0; i < len; i++) {
        let cnt = count[i];
        while (cnt--) res.push(i);
    }
    return res;
    // return count.reduce((acc, el, i) => {
    //     while(el--) acc.push(i)
    //     return acc
    // }, [])
};

module.exports = a => counting(a)
