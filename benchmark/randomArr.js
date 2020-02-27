const len = 1e3,
    base = Array.from({length: len}, i => i),
    SET = base.map(() => parseInt(Math.random()*len), 10),
    SETobj = base.map(() => ({
        num: parseInt(Math.random()*len, 10)
    }));
module.exports = {
    SET,
    SETobj
};