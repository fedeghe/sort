const fs = require('fs');

const createSerie = name => ({
    name,
    type: 'bar',
    data: [0, 0, 0, 0, 0, 0]
})
const baseName = '%size%_%type%.json',
    outFileName = 'glob_%type%.json',
    types = ['int', 'obj'],
    exps = [2, 3, 4, 5, 6],
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
            containLabel: true
        },
        xAxis: {
            type: 'value',
        },
        yAxis: {
            type: 'category',
            data: [100, '1K', '10K', '100K' , '1M']
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
            content = JSON.parse(fs.readFileSync(`stats/${size}_${type}.json`, {encoding: 'utf8'}));
        Object.keys(content).forEach(k => {
            const theIndex = data.series.find(e => e.name === k)
            if (theIndex) {
                theIndex.data[index] = content[k]
            }
        });
        data.title.text = `Type ${type}`
    });
    
    return {
        fileName: outFileName.replace(/%type%/, type),
        content: JSON.stringify(data)
    }
}

const writeFile = ({fileName, content}) => {
    fs.writeFileSync('stats/' + fileName, content)
}

types.map(buildFile).forEach(writeFile)





