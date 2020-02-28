const _ = require('lodash'),
    quick = require('./quick'),
    quickObj = require('./quickObj'),
    merge = require('./merge'),
    bubble = require('./bubble'),
    insertion = require('./insertion'),
    selection = require('./selection'),
    counting = require('./counting'),
    radix = require('./radix'),
    bitonic = require('./bitonic'),
    gnome = require('./gnome'),
    shell = require('./shell'),
    comb = require('./comb'),
    arrs = require('./benchmark/randomArr')

describe('sort ', () => {
    const SET = arrs.SET,
        SETobj = arrs.SETobj,
        SET2pow = arrs.SET2pow;
    let native = [],
        nativeObj = [],
        native2pow = [];

    test('native', () => {
        const start = performance.now();
        native = [...SET].sort((a, b) => a > b ? 1 : -1);
        const mid = performance.now();
        nativeObj = [...SETobj].sort((a, b) => a.num > b.num ? 1 : -1);
        const end = performance.now();

        native2pow = [...SET2pow].sort((a, b) => a > b ? 1 : -1);

        expect(native.length).toEqual(nativeObj.length);
        console.log('native [int]: ', (mid - start).toFixed(1) + 'ms')
        console.log('native [obj]: ', (end - mid).toFixed(1) + 'ms')
    })

    test('quick', () => {
        const start = performance.now(),
            quick_int = quick([...SET]),
            mid = performance.now(),
            quick_obj = quickObj([...SETobj], (a, b) => a.num < b.num, (a, b) => a.num > b.num),
            end = performance.now();

        expect(quick_int).toEqual(native);
        expect(quick_obj).toEqual(nativeObj);
        console.log('quick [int]: ', (mid - start).toFixed(1) + 'ms')
        console.log('quick [obj]: ', (end - mid).toFixed(1) + 'ms')
    });

    test('merge', () => {
        const start = performance.now(),
            ordered_int = merge([...SET], (a, b) => a < b),
            mid = performance.now(),
            ordered_obj = merge([...SETobj], (a, b) => a.num < b.num ),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        console.log('merge [int]: ', (mid - start).toFixed(1) + 'ms')
        console.log('merge [obj]: ', (end - mid).toFixed(1) + 'ms') 
    });

    test('bubble', () => {
        const start = performance.now(),
            ordered_int = bubble([...SET], (a, b) => a > b),
            mid = performance.now(),
            ordered_obj = bubble([...SETobj], (a, b) => a.num > b.num),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        console.log('bubble [int]: ', (mid - start).toFixed(1) + 'ms')
        console.log('bubble [obj]: ', (end - mid).toFixed(1) + 'ms') 
    });

    test('insertion', () => {
        const start = performance.now(),
            ordered_int = insertion([...SET], (a, b) => a > b),
            mid = performance.now(),
            ordered_obj = insertion([...SETobj], (a, b) => a.num > b.num),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        console.log('insertion [int]: ', (mid - start).toFixed(1) + 'ms')
        console.log('insertion [obj]: ', (end - mid).toFixed(1) + 'ms') 
    });

    test('selection', () => {
        const start = performance.now(),
            ordered_int = selection([...SET], (a, b) => a > b),
            mid = performance.now(),
            ordered_obj = selection([...SETobj], (a, b) => a.num > b.num),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        console.log('selection [int]: ', (mid - start).toFixed(1) + 'ms')
        console.log('selection [obj]: ', (end - mid).toFixed(1) + 'ms') 
    });

    test('counting', () => {
        const start = performance.now(),
            set = [...SET],
            min = set.reduce((acc, el) => acc < el ? acc : el, Infinity),
            max = set.reduce((acc, el) => acc > el ? acc : el, -Infinity),
            ordered = counting(set, min, max),
            end = performance.now();
        expect(ordered).toEqual(native);
        console.log('counting [int]: ', (end - start).toFixed(1) + 'ms')
    });

    test('radix', () => {
        const start = performance.now(),
            ordered = radix([...SET]),
            end = performance.now();
        expect(ordered).toEqual(native);
        console.log('radix [int]: ', (end - start).toFixed(1) + 'ms')
    });

    test('bitonic', () => {
        const start = performance.now(),
            ordered = bitonic([...SET2pow]),
            end = performance.now();
        expect(ordered).toEqual(native2pow);
        console.log('bitonic [int]: ', (end - start).toFixed(1) + 'ms')
    });

    test('gnome', () => {
        const start = performance.now(),
            ordered = gnome([...SET]),
            end = performance.now();
        expect(ordered).toEqual(native);
        console.log('gnome [int]: ', (end - start).toFixed(1) + 'ms')
    });

    test('shell', () => {
        const start = performance.now(),
            ordered = shell([...SET]),
            end = performance.now();
        expect(ordered).toEqual(native);
        console.log('shell [int]: ', (end - start).toFixed(1) + 'ms')
    });

    // test('comb', () => {
    //     const start = performance.now(),
    //         ordered = comb([...SET]),
    //         end = performance.now();
    //     expect(ordered).toEqual(native);
    //     console.log('comb [int]: ', (end - start).toFixed(1) + 'ms')
    // });
    
    test('lodash', () => {
        const start = performance.now(),
            _int = _.sortBy([...SET]),
            mid = performance.now(),
            _obj = _.sortBy([...SETobj], 'num'),
            end = performance.now();

        expect(_int).toEqual(native);
        expect(_obj).toEqual(nativeObj);
        console.log('lodash [int]: ', (mid - start).toFixed(1) + 'ms')
        console.log('lodash [obj]: ', (end - mid).toFixed(1) + 'ms')
    });
});