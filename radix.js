const radixSort = arr => {
    const maxNum = Math.max(...arr) * 10;
    let div = 10;
    while (div < maxNum) {
        let buckets = [...Array(10)].map(() => []);
        for (let num of arr) {
            buckets[Math.floor((num % div) / (div / 10))].push(num);
        }
        arr = [].concat.apply([], buckets);
        div *= 10;
    }
    return arr;
}
module.exports = a => radixSort(a)
