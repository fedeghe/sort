const fs = require('fs'),
    len = require('./../benchmark/randomArr').len,
    swap = (items, leftIndex, rightIndex) => {
        let temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    };

const writeStats = (file, data) => {
    const then = () => {
        fs.readFile(file, 'utf8', function(err, contents) {
            const lines = contents.split(/\n/)
            const titles = lines[0].split(',');
            let res = titles.reduce((acc, el) => {
                acc[el] = {
                    value: 0,
                    min: Infinity,
                    max: -Infinity
                }
                return acc;
            }, {})
            const data = lines.slice(1);
            const dataLength = data.length;

            res = data.reduce((r, line) => {
                if (line.length === 0) return r;
                const values = line.split(',');
                values.forEach((v, i) => {
                    let val = parseFloat(v);
                    r[titles[i]].value += val;
                    r[titles[i]].min = Math.min(r[titles[i]].min, val);
                    r[titles[i]].max = Math.max(r[titles[i]].max, val);
                })
                return r;
            }, res);


            
            // get mean
            res = Object.keys(res).reduce((acc, k) => {
                acc[k] = {
                    ...res[k],
                    value: res[k].value / dataLength
                }
                return acc;
            }, {});
            

            const keys = Object.keys(res);
            const out = {}
            keys.sort((a,b) => 
                res[a].value > res[b].value ? 1: -1
            ).forEach(k => {
                out[k] = res[k]
            })
            // console.log(out)
            fs.writeFileSync(
                file.replace(/([int|obj]\.csv)/, `$1.summary.txt`),
                Object.keys(out).reduce(
                    (acc, k) => {
                        // console.log(out[k])
                        const makeReadable = v => parseFloat(v, 10).toFixed(3)
                        return `${acc}${k}: ${makeReadable(out[k].value)} [best: ${makeReadable(out[k].min)}, worst: ${makeReadable(out[k].max)}]\n`
                    },
                    `Mean on ${dataLength} trials (on ${len} elements):\n`
                )
            );
            fs.writeFileSync(
                file.replace(/([int|obj])\.csv/, `$1.json`),
                JSON.stringify(Object.keys(out).reduce(
                    (acc, k) => {
                        acc[k] = parseFloat(out[k].value.toFixed(2), 10);
                        return acc;
                    },
                    {}
                ))
            ); 
            // console.log(out)
        });
    }
    try {
        if (!fs.existsSync(file)) {
            fs.writeFile(file, data.reduce((acc, el) => `${acc}${el.join(',')}\n` , ''), function(err) {
                then();
                if(err) {
                    return console.log(err);
                }
            }); 
        } else {
            fs.appendFile(file, `${data[1].join(',')}\n`, function (err) {
                then();
                if (err) {
                    return console.log(err);
                }
            });
        }
    } catch(err) {
        console.error(err)
    }
}

module.exports = {
    swap,
    writeStats
}