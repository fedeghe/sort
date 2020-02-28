const _ = require('lodash'),
    quick = require('./quick'),
    quickObj = require('./quickObj'),
    merge = require('./merge'),
    bubble = require('./bubble'),
    arrs = require('./benchmark/randomArr')

describe('sort ', () => {
    const SET = arrs.SET,
        SETobj = arrs.SETobj;
    let native = [], nativeObj = [];

    test('native', () => {
        const start = performance.now();
        native = [...SET].sort((a, b) => a > b ? 1 : -1);
        const mid = performance.now();
        nativeObj = [...SETobj].sort((a, b) => a.num > b.num ? 1 : -1);
        const end = performance.now();

        expect(native.length).toEqual(nativeObj.length);
        console.log('native [int]: ', (mid - start).toFixed(1)+'ms')
        console.log('native [obj]: ', (end - mid).toFixed(1)+'ms')
    })

    test('quick', () => {
        const start = performance.now(),
            quick_int = quick([...SET]),
            mid = performance.now(),
            quick_obj = quickObj([...SETobj], (a, b) => a.num < b.num, (a, b) => a.num > b.num),
            end = performance.now();

        expect(quick_int).toEqual(native);
        expect(quick_obj).toEqual(nativeObj);
        console.log('quick [int]: ', (mid - start).toFixed(1)+'ms')
        console.log('quick [obj]: ', (end - mid).toFixed(1)+'ms')
    });

    test('merge', () => {
        const start = performance.now(),
            ordered_int = merge([...SET], (a, b) => a < b),
            end = performance.now(),
            startDef = performance.now(),
            ordered_obj = merge([...SETobj], (a, b) => a.num < b.num ),
            endDef = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        console.log('merge [int]: ', (end - start).toFixed(1)+'ms')
        console.log('merge [obj]: ', (endDef - startDef).toFixed(1)+'ms') 
    });

    test('bubble', () => {
        const start = performance.now(),
            ordered_int = bubble([...SET], (a, b) => a > b),
            end = performance.now(),
            startDef = performance.now(),
            ordered_obj = bubble([...SETobj], (a, b) => a.num > b.num),
            endDef = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        console.log('bubble [int]: ', (end - start).toFixed(1)+'ms')
        console.log('bubble [obj]: ', (endDef - startDef).toFixed(1)+'ms') 
    });

    test('lodash', () => {
        const start = performance.now(),
            _int = _.sortBy([...SET]),
            mid = performance.now(),
            _obj = _.sortBy([...SETobj], 'num'),
            end = performance.now();

        expect(_int).toEqual(native);
        expect(_obj).toEqual(nativeObj);
        console.log('lodash [int]: ', (mid - start).toFixed(1)+'ms')
        console.log('lodash [obj]: ', (end - mid).toFixed(1)+'ms')
    });
});