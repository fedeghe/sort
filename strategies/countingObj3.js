const counting = (arr, fn) => 
    arr.reduce((acc, el) => {
        let j = fn(el)
        acc[j] = acc[j]
            ? {count: acc[j].count + 1, obj: acc[j].obj}
            : {count: 1, obj: el};
        return acc
    }, []).reduce((acc, el) => {
        while(el.count--) acc.push(el.obj)
        return acc
    }, []);

module.exports = (a, fn) => counting(a, fn)
