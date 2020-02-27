const len = 1e1,
    base = Array.from({length: len}, i => i),
    SET = base.map(() => parseInt(Math.random()*len), 10),
    SETfunc = base.map(() => ({
        num: parseInt(Math.random()*len, 10)
    }));
module.exports = {
    SET,
    SETfunc
};