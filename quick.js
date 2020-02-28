const swap = require('./utils.js').swap

const partition = (items, left, right) => {
    // var pivot   = items[Math.floor((right + left) / 2)],
    var pivot = items[(right+left)  >>> 1], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        
        while (items[i] < pivot)i++;
        while (items[j] > pivot) j--;
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = (items, left, right) => {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

module.exports = a => quickSort(a, 0, a.length - 1);
