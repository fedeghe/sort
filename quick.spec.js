const quick = require('./quick')

describe('sort ', () => {
    const len = 1e5;
    const base = Array.from({length: len}, i => i)
    const MID = base.map(() => parseInt(Math.random()*len), 10),
        WORST = base.map((el, i) => 1),
        BEST = base.map((el, i) => i);

        // console.log(MID)
    it('quick', () => {
        const mid0 = performance.now(),
            mid = quick([...MID]),
            mid1 = performance.now(),

            worst0 = performance.now(),
            worst = quick([...WORST]),
            worst1 = performance.now(),
            
            best0 = performance.now(),
            best = quick([...BEST]),
            best1 = performance.now();

        expect(true).toEqual(true);
        expect(mid).toEqual([...MID].sort((a, b) => a > b ? 1 : -1));
        expect(worst).toEqual([...WORST].sort((a, b) => a > b ? 1 : -1));
        expect(best).toEqual([...BEST].sort((a, b) => a > b ? 1 : -1));
        console.log('mid: ', (mid1-mid0).toFixed(1)+'ms')
        console.log('worst: ', (worst1-worst0).toFixed(1)+'ms')
        console.log('best: ', (best1-best0).toFixed(1)+'ms')
        
    });
});