const swap = (items, leftIndex, rightIndex) => {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

module.exports = {
    swap
}