const len = 1e2,
    len2 = 2**10,
    base = Array.from({length: len}, i => i),
    base2pow = Array.from({length: len2}, i => i),
    SET = base.map(() => parseInt(Math.random() * len), 10),
    SET2pow = base2pow.map(() => parseInt(Math.random() * len), 10),
    SETobj = base.map(() => ({
        num: parseInt(Math.random() * len, 10)
    }));
module.exports = {
    SET,
    SETobj,
    SET2pow,
    len
};