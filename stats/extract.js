const fs = require('fs');

const sizes = [100, 200, 500, 1000, 2000]

const nodev = process.versions.node;

const toLabel = val => {
        if (val >= 1e6) return `${val / 1e6}M`;
        if (val >= 1e3) return `${val / 1e3}K`;
        return val;
    },
    createSerie = name => ({
        name,
        type: 'bar',
        data: sizes.map(() => 0),
        empty : true
    }),
    baseName = (type, size) => `stats/${nodev}/${size}/${type}.json`,
    outFileName = type => `glob_${type}.json`,
    types = ['int', 'obj'],
    dataTpl = {
        title: {
            text: 'Comparison',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: sizes.map(toLabel)
        },
        series: [
            'counting', 'quick', 'native', 'shell', 'radix', 'merge', 'bucket', 'bubble', 'insertion', 'selection', 'counting1', 'counting2', 'counting3', 'heap', 'gnome', 'shaker', 'lodash', 'countingObj', 'countingObj2', 'countingObj3'].map(createSerie)
    };
    




const buildFile = type => {
    const data = {...dataTpl};
    data.title.text = `Type === ${type}`;
    sizes.forEach((size, index) => {
        const content = JSON.parse(fs.readFileSync(
                baseName(type, size),
                {encoding: 'utf8'}
            ));
        console.log('content', content)
        Object.keys(content).forEach(k => {
            const theIndex = data.series.find(e => e.name === k)
            if (theIndex) {
                theIndex.data[index] = content[k]
                theIndex.empty = false
            }
        });
    });
    data.series = data.series.filter(d => !d.empty)
    console.log()
    console.log('data is: ', data)
    return {
        fileName: outFileName(type),
        content: data
    }
}

const writeFile = ({fileName, content}) =>
console.log(content)||
    fs.writeFileSync('stats/' + fileName, JSON.stringify({
        ...content,
        series: content.series.sort((a, b) => {
            const aSum = a.data.reduce((acc, el) => acc + el, 0),
                bSum = b.data.reduce((acc, el) => acc + el, 0);
            return aSum > bSum ? 1 : -1;
        })
    }));


var r = types.map(t => buildFile(t))
console.log('===========')
r.forEach(writeFile)





