
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, fn1, fn2, left, right) {
    // var pivot   = items[Math.floor((right + left) / 2)],
    var pivot = items[(right+left)  >>> 1], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        
        while (fn1(items[i], pivot))i++;
        while (fn2(items[j], pivot)) j--;
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, fn1, fn2, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, fn1, fn2, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, fn1, fn2, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, fn1, fn2, index, right);
        }
    }
    return items;
}

module.exports = (a, fn1, fn2) => quickSort(a, fn1, fn2, 0, a.length - 1);
