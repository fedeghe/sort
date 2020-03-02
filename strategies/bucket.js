// https://gist.github.com/tixxit/811196/9e94fcd427a19f756dafdec664f929a2f58a8f04
// 
function bsort(a, key) {
    key = key || function(x) { return x };
    var len = a.length,
        buckets = [],
        i, j, b, d = 0;
    for (; d < 32; d += 4) {
        for (i = 16; i--;)
            buckets[i] = [];
        for (i = len; i--;)
            buckets[(key(a[i]) >> d) & 15].push(a[i]);
        for (b = 0; b < 16; b++)
            for (j = buckets[b].length; j--;)
                a[++i] = buckets[b][j];
    }
    return a;
}

module.exports = (a, fn) => bsort(a, fn)