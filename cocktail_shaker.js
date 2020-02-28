const swap = require('./utils.js').swap;
const shaker = (arr, fn) => {
    let max = arr.length - 1;
    let min = 0;
    while(min < max){
        let biggest = min;
        let smallest = max;
        for (var i = min; i <= max; i++)
            if (fn(arr[i], arr[biggest]))
                biggest = i;
        if(max != biggest){ //swap the items
            swap(arr, biggest, max)
        }
        max--;
        for (var j = max; j >= min; j--)
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
