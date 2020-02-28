const swap = require('./utils.js').swap

const gnome = (items, fn) => {
    let array = [],
        position = 1;
    
    if ( items ) {
        array = [...items];
    }
    
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
