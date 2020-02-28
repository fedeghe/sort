const _ = require('lodash'),
    quick = require('./quick'),
    quickObj = require('./quickObj'),
    merge = require('./merge'),
    bubble = require('./bubble'),
    insertion = require('./insertion'),
    selection = require('./selection'),
    counting = require('./counting'),
    counting2 = require('./counting2'),
    countingO = require('./countingO'),
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
        native2pow = [],
        times = {};

    afterAll(() => {
        const int = [],
            obj = [];
        let intRes = [],
            objRes = []
        Object.keys(times).forEach(strategy => {
            if ('int' in times[strategy]){
                int.push({[strategy]: parseFloat(times[strategy].int.toFixed(3), 10) })
            }
            if ('obj' in times[strategy]){
                obj.push({[strategy]: parseFloat(times[strategy].obj.toFixed(3), 10) })
            }
        })
        intRes = int.sort((a, b) => Object.values(a)[0] > Object.values(b)[0] ? 1 : -1)
        objRes = obj.sort((a, b) => Object.values(a)[0] > Object.values(b)[0] ? 1 : -1)
        console.log('LeaderBoard:');
        console.log('int:', Object.keys(intRes).reduce((acc, el) => {
            acc + `\n${el}: ${intRes[el]}`
            return acc
        }, 'Leaderboard:'))
        console.log('obj:', objRes)
    })

    test('native', () => {
        const start = performance.now();
        native = [...SET].sort((a, b) => a > b ? 1 : -1);
        const mid = performance.now();
        nativeObj = [...SETobj].sort((a, b) => a.num > b.num ? 1 : -1);
        const end = performance.now();

        native2pow = [...SET2pow].sort((a, b) => a > b ? 1 : -1);

        expect(native.length).toEqual(nativeObj.length);
        times.native = {
            int: mid - start,
            obj: end - mid
        };
        // console.log('native [int]: ', (mid - start).toFixed(1) + 'ms')
        // console.log('native [obj]: ', (end - mid).toFixed(1) + 'ms')
    })

    test('quick', () => {
        const start = performance.now(),
            quick_int = quick([...SET]),
            mid = performance.now(),
            quick_obj = quickObj([...SETobj], (a, b) => a.num < b.num, (a, b) => a.num > b.num),
            end = performance.now();

        expect(quick_int).toEqual(native);
        expect(quick_obj).toEqual(nativeObj);
        times.quick = {
            int: mid - start,
            obj: end - mid
        };
        // console.log('quick [int]: ', (mid - start).toFixed(1) + 'ms')
        // console.log('quick [obj]: ', (end - mid).toFixed(1) + 'ms')
    });

    test('merge', () => {
        const start = performance.now(),
            ordered_int = merge([...SET], (a, b) => a < b),
            mid = performance.now(),
            ordered_obj = merge([...SETobj], (a, b) => a.num < b.num ),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        times.merge = {
            int: mid - start,
            obj: end - mid
        };
        // console.log('merge [int]: ', (mid - start).toFixed(1) + 'ms')
        // console.log('merge [obj]: ', (end - mid).toFixed(1) + 'ms') 
    });

    test('bubble', () => {
        const start = performance.now(),
            ordered_int = bubble([...SET], (a, b) => a > b),
            mid = performance.now(),
            ordered_obj = bubble([...SETobj], (a, b) => a.num > b.num),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        times.bubble = {
            int: mid - start,
            obj: end - mid
        };
        // console.log('bubble [int]: ', (mid - start).toFixed(1) + 'ms')
        // console.log('bubble [obj]: ', (end - mid).toFixed(1) + 'ms') 
    });

    test('insertion', () => {
        const start = performance.now(),
            ordered_int = insertion([...SET], (a, b) => a > b),
            mid = performance.now(),
            ordered_obj = insertion([...SETobj], (a, b) => a.num > b.num),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        times.insertion = {
            int: mid - start,
            obj: end - mid
        };
        // console.log('insertion [int]: ', (mid - start).toFixed(1) + 'ms')
        // console.log('insertion [obj]: ', (end - mid).toFixed(1) + 'ms') 
    });

    test('selection', () => {
        const start = performance.now(),
            ordered_int = selection([...SET], (a, b) => a > b),
            mid = performance.now(),
            ordered_obj = selection([...SETobj], (a, b) => a.num > b.num),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        times.selection = {
            int: mid - start,
            obj: end - mid
        };
        // console.log('selection [int]: ', (mid - start).toFixed(1) + 'ms')
        // console.log('selection [obj]: ', (end - mid).toFixed(1) + 'ms') 
    });

    test('counting', () => {
        const start = performance.now(),
            set = [...SET],
            min = set.reduce((acc, el) => acc < el ? acc : el, Infinity),
            max = set.reduce((acc, el) => acc > el ? acc : el, -Infinity),
            ordered = counting(set, min, max),
            end = performance.now();
        expect(ordered).toEqual(native);
        times.counting = {
            int: end - start
        };
        // console.log('counting [int]: ', (end - start).toFixed(1) + 'ms')
    });
    test('counting2', () => {
        const start = performance.now(),
            set = [...SET],
            ordered = counting2(set),
            end = performance.now();
        expect(ordered).toEqual(native);
        times.counting2 = {
            int: end - start
        };
        // console.log('counting [int]: ', (end - start).toFixed(1) + 'ms')
    });

    test('countingO', () => {
        const start = performance.now(),
            set = [...SETobj],
            ordered = countingO(set, n => n.num),
            end = performance.now();
        expect(ordered).toEqual(nativeObj);
        times.countingO = {
            obj: end - start
        };
        // console.log('counting [int]: ', (end - start).toFixed(1) + 'ms')
    });

    test('radix', () => {
        const start = performance.now(),
            ordered = radix([...SET]),
            end = performance.now();
        expect(ordered).toEqual(native);
        times.radix = {
            int: end - start
        };
        // console.log('radix [int]: ', (end - start).toFixed(1) + 'ms')
    });

    test('bitonic', () => {
        const start = performance.now(),
            ordered = bitonic([...SET2pow]),
            end = performance.now();
        expect(ordered).toEqual(native2pow);
        times.bitonic = {
            int: end - start
        };
        // console.log('bitonic [int]: ', (end - start).toFixed(1) + 'ms')
    });

    test('gnome', () => {
        const start = performance.now(),
            ordered = gnome([...SET]),
            end = performance.now();
        expect(ordered).toEqual(native);
        times.gnome = {
            int: end - start
        };
        // console.log('gnome [int]: ', (end - start).toFixed(1) + 'ms')
    });

    test('shell', () => {
        const start = performance.now(),
            ordered = shell([...SET]),
            end = performance.now();
        expect(ordered).toEqual(native);
        times.shell = {
            int: end - start
        };
        // console.log('shell [int]: ', (end - start).toFixed(1) + 'ms')
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
        times.lodash = {
            int: mid - start,
            obj: end - mid
        };
        // console.log('lodash [int]: ', (mid - start).toFixed(1) + 'ms')
        // console.log('lodash [obj]: ', (end - mid).toFixed(1) + 'ms')
    });
});