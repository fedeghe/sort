const len = 1e2,
    len2 = 2**10,
    base = Array.from({length: len}, i => i),
    base2pow = Array.from({length: len2}, i => i),
    SET = base.map(() => parseInt(Math.random() * len), 10),
    SET2pow = base2pow.map(() => parseInt(Math.random() * len), 10),
    SETobj = base.map(() => ({
        num: parseInt(Math.random() * len, 10)
    })),
    charsets = [[65,90], [97,122], [48,57]],
    charset = charsets.reduce((acc, el) => {
        let a = [];
        for(let h = el[0]; h <=el[1]; h++) a.push(h)
        return acc.concat(a)
    }, []),
    getRndString = len => 
        Array.from({length: len}, () => String.fromCharCode(
            charset[~~(Math.random() * charset.length)]
        )).join(''),
    SETSTRING = base.map(i => getRndString(8));
module.exports = {
    SET,
    SETobj,
    SET2pow,
    SETSTRING,
    len
};