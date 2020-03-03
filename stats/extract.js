const fs = require('fs');

const exps = [2, 3, 4]

const nodev = process.versions.node;

const toLabel = exp => {
        const val = 10 ** exp;
        if (val >= 1e6) return `${val / 1e6}M`;
        if (val >= 1e3) return `${val / 1e3}K`;
        return val;
    },
    createSerie = name => ({
        name,
        type: 'bar',
        data: exps.map(() => 0)
    }),
    baseName = `stats/${nodev}_%size%_%type%.json`,
    outFileName = 'glob_%type%.json',
    types = ['int', 'obj'],
    data = {
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
            data: exps.map(toLabel)
        },
        series: [
            createSerie('counting'),
            createSerie('quick'),
            createSerie('native'),
            createSerie('shell'),
            createSerie('radix'),
            createSerie('merge'),
            createSerie('bucket'),
            createSerie('bubble'),
            createSerie('insertion'),
            createSerie('selection'),
            createSerie('counting2'),
            createSerie('heap'),
            createSerie('gnome'),
            createSerie('shaker'),
            createSerie('lodash')
        ]
    };
    




const buildFile = type => {
    exps.forEach((exp, index) => {
        const size = 10 ** exp,
            content = JSON.parse(fs.readFileSync(
                baseName.replace(/%type%/, type).replace(/%size%/, size),
                {encoding: 'utf8'}
            ));
        Object.keys(content).forEach(k => {
            const theIndex = data.series.find(e => e.name === k)
            if (theIndex) {
                theIndex.data[index] = content[k]
            }
        });
        data.title.text = `Type ${type}`
    });
    
    return {    // 
        fileName: outFileName.replace(/%type%/, type),
        content: data
    }
}

const writeFile = ({fileName, content}) => {
    // console.log(content)
    // order
    const data = {
        ...content,
        series: content.series.sort((a, b) => {
            const aSum = a.data.reduce((acc, el) => acc + el, 0),
                bSum = b.data.reduce((acc, el) => acc + el, 0);
            return aSum > bSum ? 1 : -1;
        })
    }
    fs.writeFileSync('stats/' + fileName, JSON.stringify(data))
}

types.map(buildFile).forEach(writeFile)





