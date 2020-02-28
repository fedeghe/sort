function kernel(x, p, q) {
    const y = new Array(x.length),
        d = 1 << (p - q);
  
    for (let i = 0; i < x.length; i++) {
        const up = ((i >> p) & 2) === 0;

        if ((i & d) == 0 && (x[i] > x[i + d]) === up) {
            y[i] =  x[i + d];
        } else if ((i & d) == d && (x[i - d] > x[i]) === up) {
            y[i] = x[i - d];
        } else {
            y[i] = x[i];
        }
    }
    return y;
}
  
function bitonicsort(x, n) {
    for (let i = 0; i < n; i++) {
        for(let j = 0; j <=i; j++) {
            x = kernel(x, i, j);
        }
    }
    return x;
}

module.exports = a => bitonicsort(a, Math.log2(a.length))
