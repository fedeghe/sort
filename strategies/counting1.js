const counting = arr => 
    arr.reduce((acc, el) => {
        acc[el] = acc[el] + 1 || 1;
        return acc;
    }, []).reduce((acc, el, i) => {
        while(el--) acc.push(i)
        return acc
    }, []);

module.exports = a => counting(a)
