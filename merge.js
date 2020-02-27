function merge (left, right, fn) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (fn(left[leftIndex], right[rightIndex])) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}
function mergeSort (unsortedArray, fn) {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2),
        left = unsortedArray.slice(0, middle),
        right = unsortedArray.slice(middle);
  
    return merge(
      mergeSort(left, fn),
      mergeSort(right, fn),
      fn
    );
}

module.exports = (A, fn) => mergeSort(A, fn)