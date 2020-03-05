const fs = require('fs'),
    _ = require('lodash'),
    quick = require('./strategies/quick'),
    quickObj = require('./strategies/quickObj'),
    merge = require('./strategies/merge'),
    bubble = require('./strategies/bubble'),
    sbubble = require('./strategies/sbubble'),
    insertion = require('./strategies/insertion'),
    selection = require('./strategies/selection'),
    counting = require('./strategies/counting'),
    counting1 = require('./strategies/counting1'),
    counting2 = require('./strategies/counting2'),
    counting3 = require('./strategies/counting3'),
    countingObj = require('./strategies/countingObj'),
    countingObj2 = require('./strategies/countingObj2'),
    countingObj3 = require('./strategies/countingObj3'),
    radix = require('./strategies/radix'),
    heap = require('./strategies/heap'),
    bitonic = require('./strategies/bitonic'),
    gnome = require('./strategies/gnome'),
    fastsort = require('./strategies/fastsort'),
    shell = require('./strategies/shell'),
    shaker = require('./strategies/cocktail_shaker'),
    bucket = require('./strategies/bucket'),
    comb = require('./strategies/comb'),
    arrs = require('./benchmark/randomArr'),
    len = require('./benchmark/randomArr').len,
    writeStats = require('./strategies/utils').writeStats,
    nodev = process.versions.node;



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
        // let intRes = [],
        //     objRes = [],
        let csvInt = [[], []],
            csvObj = [[], []];
        Object.keys(times).forEach(strategy => {
            
            if ('int' in times[strategy]){
                csvInt[0].push(strategy);
                let val = parseFloat(times[strategy].int.toFixed(3), 10)
                int.push({[strategy]: val});
                csvInt[1].push(val);
            }
            
            if ('obj' in times[strategy]){
                csvObj[0].push(strategy);
                let val = parseFloat(times[strategy].obj.toFixed(3), 10);
                obj.push({[strategy]: val });
                csvObj[1].push(val);
            }
        });

        const  dir = `./stats/${nodev}`,
            intPath = `${dir}/${len}_int.csv`,
            objPath = `${dir}/${len}_obj.csv`;
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        writeStats(intPath, csvInt);
        writeStats(objPath, csvObj);        
    })

    test('native', () => {
        const set = [...SET],
            setobj = [...SETobj],
            set2pow = [...SET2pow];
        const start = performance.now();
        native = set.sort((a, b) => a > b ? 1 : -1);
        const mid = performance.now();
        nativeObj = setobj.sort((a, b) => a.num > b.num ? 1 : -1);
        const end = performance.now();

        native2pow = set2pow.sort((a, b) => a > b ? 1 : -1);

        expect(native.length).toEqual(nativeObj.length);
        times.native = {
            int: mid - start,
            obj: end - mid
        };
    })




    test('quick', () => {
        const set = [...SET],
            setobj = [...SETobj];
        const start = performance.now(),
            quick_int = quick(set),
            mid = performance.now(),
            quick_obj = quickObj(setobj, (a, b) => a.num < b.num, (a, b) => a.num > b.num),
            end = performance.now();

        expect(quick_int).toEqual(native);
        expect(quick_obj).toEqual(nativeObj);
        times.quick = {
            int: mid - start,
            obj: end - mid
        };
    });

    test('fastsort', () => {
        const set = [...SET],
            setobj = [...SETobj];
        const start = performance.now(),
            ordered_int = fastsort(set).asc([a => a]),
            mid = performance.now(),
            ordered_obj = fastsort(setobj).asc([a => a.num]),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        times.fastsort = {
            int: mid - start,
            obj: end - mid
        };
    });

    test('counting', () => {
        const set = [...SET],
            min = set.reduce((acc, el) => acc < el ? acc : el, Infinity),
            max = set.reduce((acc, el) => acc > el ? acc : el, -Infinity),
            start = performance.now(),
            ordered = counting(set, min, max),
            end = performance.now();
        expect(ordered).toEqual(native);
        times.counting = {
            int: end - start
        };
    });

    test.each([
        ['counting1', counting1],
        ['counting2', counting2],
        ['counting3', counting3],
    ])('%s', (name, func) => {
        const set = [...SET],
            start = performance.now(),
            ordered = func(set),
            end = performance.now();
        expect(ordered).toEqual(native);
        times[name] = {
            int: end - start
        };
    });

    test.each([
        ['countingObj', countingObj, [[...SETobj], n => n.num]],
        ['countingObj2', countingObj2, [[...SETobj],n => n.num]],
        ['countingObj3', countingObj3, [[...SETobj],n => n.num]]
    ])('%s', (name, func, otherArgs) => {
        const start = performance.now(),
            ordered = func.apply(null, otherArgs),
            end = performance.now();
        expect(ordered).toEqual(nativeObj);
        times[name] = {
            obj: end - start
        };
    });

    if (len < 1E5) {
        test.each([
            ['heap', heap],
            ['radix', radix],
            ['shell', shell],
        ])('%s', (name, func) => {
            const set = [...SET],
                start = performance.now(),
                ordered = func(set),
                end = performance.now();
            expect(ordered).toEqual(native);
            times[name] = {
                int: end - start
            };
        });
        test.each([
            [
                'gnome', gnome,
                [[...SET], (a, b) => a >= b],
                [[...SETobj], (a, b) => a.num >= b.num]
            ],
            [
                'shaker', shaker,
                [[...SET], (a, b) => a > b],
                [[...SETobj], (a, b) => a.num > b.num]
            ],
            [
                'lodash', _.sortBy,
                [[...SET]],
                [[...SETobj], 'num']
            ]
        ])('%s', (name, func, argsInt, argsObj) => {
            const start = performance.now(),
                ordered_int = func.apply(null, argsInt),
                mid = performance.now(),
                ordered_obj = func.apply(null, argsObj),
                end = performance.now();

            expect(ordered_int).toEqual(native);
            expect(ordered_obj).toEqual(nativeObj);
            times[name] = {
                int: mid - start,
                obj: end - mid
            };
        });
        test.each([
            ['bucket', bucket, [[...SET]], [[...SETobj], a => a.num ]],
            ['merge', merge, [[...SET], (a, b) => a < b], [[...SETobj], (a, b) => a.num < b.num]],
            ['bubble', bubble, [[...SET], (a, b) => a > b], [[...SETobj], (a, b) => a.num > b.num]],
            ['sbubble', sbubble, [[...SET], (a, b) => a > b], [[...SETobj], (a, b) => a.num > b.num]],
            ['insertion', insertion, [[...SET], (a, b) => a > b], [[...SETobj], (a, b) => a.num > b.num]],
            ['selection', insertion, [[...SET], (a, b) => a > b], [[...SETobj], (a, b) => a.num > b.num]],
        ])('%s', (name, func, argsInt, argsObj) => {
            const start = performance.now(),
                _int = func.apply(null, argsInt),
                mid = performance.now(),
                _obj = func.apply(null, argsObj),
                end = performance.now();

            expect(_int).toEqual(native);
            expect(_obj).toEqual(nativeObj);
            times[name] = {
                int: mid - start,
                obj: end - mid
            };
        });
    }
});