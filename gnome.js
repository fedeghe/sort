const swap = require('./utils').swap

const gnome = (items, fn) => {
    let array = items ? [...items] : [],
        position = 1;
    
    while ( position < items.length ) {
        if ( fn(array[position], array[position - 1]) ) {
            position++;
        } else {
            swap(array, position, position - 1);
            if ( position > 1 ) {
                position--;
            }
        }
    }
    return array;
}



module.exports = (a, fn) => gnome(a, fn)
