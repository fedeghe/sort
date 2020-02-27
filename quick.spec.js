const quick = require('./quick'),
    quickFunc = require('./quickfunc'),
    arrs = require('./benchmark/randomArr')

describe('sort ', () => {
    const SET = arrs.SET,
        SETfunc = arrs.SETfunc;
        
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