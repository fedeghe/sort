const swap = require('./utils').swap;
const shaker = (arr, fn) => {
    let max = arr.length - 1,
        min = 0;
    while(min < max){
        let biggest = min,
            smallest = max,
            i = min,
            j = max
        for (; i <= max; i++)
            if (fn(arr[i], arr[biggest]))
                biggest = i;
        if(max != biggest){ //swap the items
            swap(arr, biggest, max)
        }
        max--;
        for (; j >= min; j--)
            if(fn(arr[smallest], arr[j]))
                smallest = j;
        if(min != smallest) { //swap the items
            swap(arr, smallest, min);
        }
        min++;
    }  
    return arr;
}

module.exports = (a, fn) => shaker(a, fn)
