const _ = require('lodash'),
    quick = require('./quick'),
    quickObj = require('./quickObj'),
    merge = require('./merge'),
    bubble = require('./bubble'),
    insertion = require('./insertion'),
    selection = require('./selection'),
    counting = require('./counting'),
    counting2 = require('./counting2'),
    countingObj = require('./countingObj'),
    radix = require('./radix'),
    bitonic = require('./bitonic'),
    gnome = require('./gnome'),
    shell = require('./shell'),
    shaker = require('./cocktail_shaker'),
    comb = require('./comb'),
    arrs = require('./benchmark/randomArr');
    fs = require('fs');


const writeStats = (file, data) => {
    try {
        if (!fs.existsSync(file)) {
            fs.writeFile(file, data.reduce((acc, el) => `${acc}${el.join(',')}\n` , ''), function(err) {
                if(err) {
                    return console.log(err);
                }
            }); 
        } else {
            fs.appendFile(file, `${data[1].join(',')}\n`, function (err) {
                if (err) throw err;
              });
        }
    } catch(err) {
        console.error(err)
    }
}

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
            objRes = [],
            csvInt = [[], []],
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

        const intPath = './stats.int.csv',
            objPath = './stats.obj.csv';
        writeStats(intPath, csvInt);
        writeStats(objPath, csvObj);

        intRes = int.sort((a, b) => Object.values(a)[0] > Object.values(b)[0] ? 1 : -1);
        objRes = obj.sort((a, b) => Object.values(a)[0] > Object.values(b)[0] ? 1 : -1);
        
        console.log(intRes.reduce((acc, o) => {
            let k = Object.keys(o)[0]
            acc += `\n${k}: ${o[k]}`
            return acc
        }, 'Leaderboard (INT):'));
        console.log(objRes.reduce((acc, o) => {
            let k = Object.keys(o)[0];
            acc += `\n${k}: ${o[k]}`;
            return acc;
        }, 'Leaderboard (OBJ):'))
        
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
    });

    test('countingObj', () => {
        const start = performance.now(),
            set = [...SETobj],
            ordered = countingObj(set, n => n.num),
            end = performance.now();
        expect(ordered).toEqual(nativeObj);
        times.countingObj = {
            obj: end - start
        };
    });

    test('radix', () => {
        const start = performance.now(),
            ordered = radix([...SET]),
            end = performance.now();
        expect(ordered).toEqual(native);
        times.radix = {
            int: end - start
        };
    });

    test('bitonic', () => {
        const start = performance.now(),
            ordered = bitonic([...SET2pow]),
            end = performance.now();
        expect(ordered).toEqual(native2pow);
        times.bitonic = {
            int: end - start
        };
    });


    test('gnome', () => {
        const start = performance.now(),
            ordered_int = gnome([...SET], (a, b) => a >= b),
            mid = performance.now(),
            ordered_obj = gnome([...SETobj], (a, b) => a.num >= b.num),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        times.gnome = {
            int: mid - start,
            obj: end - mid
        };
    });

    test('shell', () => {
        const start = performance.now(),
            ordered = shell([...SET]),
            end = performance.now();
        expect(ordered).toEqual(native);
        times.shell = {
            int: end - start
        };
    });

    test('shaker', () => {
        const start = performance.now(),
            ordered_int = shaker([...SET], (a, b) => a > b),
            mid = performance.now(),
            ordered_obj = shaker([...SETobj], (a, b) => a.num > b.num),
            end = performance.now();

        expect(ordered_int).toEqual(native);
        expect(ordered_obj).toEqual(nativeObj);
        times.shaker = {
            int: mid - start,
            obj: end - mid
        };
    });
    
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
    });
});