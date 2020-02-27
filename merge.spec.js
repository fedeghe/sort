const merge = require('./merge'),
    benchmarks = require('./benchmark/randomArr'),
    _ = require('lodash');

const SET = benchmarks.SET,
    SETfunc = benchmarks.SETfunc;

describe('mergesort ', () => {
    
    test('quick', () => {
        const start = performance.now(),
            ordererSET = merge([...SET]),
            end = performance.now(),
            startDef = performance.now(),
            ordererDEF = [...SET].sort((a, b) => a > b ? 1 : -1),
            endDef = performance.now();

        expect(ordererSET).toEqual(ordererDEF);
        console.log('mergesort time: ', (end - start).toFixed(1)+'ms')
        console.log('def: ', (endDef - startDef).toFixed(1)+'ms') 
    });
});
