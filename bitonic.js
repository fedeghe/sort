const kernel = (x, p, q) => {
    const d = 1 << (p - q);
  
    for (let i = 0; i < x.length; i++) {
        const up = ((i >> p) & 2) === 0;
        if ((i & d) == 0 && (x[i] > x[i | d]) === up) {
            const tmp = x[i];
            x[i] = x[i | d];
            x[i | d] = tmp;
        }
    }
}
  
const bitonicsort = (x, n) => {
    for (let i = 0; i < n; i++) {
        for(let j = 0; j <=i; j++) {
            kernel(x, i, j);
        }
    }
    return x;
}

module.exports = a => bitonicsort(a, Math.log2(a.length))
