const quick = require('./quick'),
    quickFunc = require('./quickfunc');

describe('sort ', () => {
    const len = 1e5;
    const base = Array.from({length: len}, i => i)
    const SET = base.map(() => parseInt(Math.random()*len), 10);
    const SETfunc = base.map(() => ({
        num: parseInt(Math.random()*len, 10)
    }));

    it('quick', () => {
        const start = performance.now(),
            ordererSET = quick([...SET]),
            end = performance.now(),
            startDef = performance.now(),
            ordererDEF = [...SET].sort((a, b) => a > b ? 1 : -1),
            endDef = performance.now();

        expect(ordererSET).toEqual(ordererDEF);
        console.log('time: ', (end - start).toFixed(1)+'ms')
        console.log('def: ', (endDef - startDef).toFixed(1)+'ms')
        
    });
    it('quickFunc', () => {
        const start = performance.now(),
            ordererSET = quickFunc([...SETfunc], (a, b) => a.num < b.num, (a, b) => a.num > b.num),
            end = performance.now(),
            startDef = performance.now(),
            ordererDEF = [...SETfunc].sort((a, b) => a.num > b.num ? 1 : -1),
            endDef = performance.now();

        expect(ordererSET).toEqual(ordererDEF);
        console.log('timeFunc: ', (end - start).toFixed(1)+'ms')
        console.log('defFunc: ', (endDef - startDef).toFixed(1)+'ms')
        
    });
});