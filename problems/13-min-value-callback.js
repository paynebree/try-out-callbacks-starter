/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

/*let minValueCallback = function(array, cb) {
    if (cb === undefined) {
      return Math.min(...array);
  } else {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let minVal = Infinity;
    if (current < minVal) {
      minVal = current;
    }
    return minVal;
  }
}
};*/

let minValueCallback = function(array, cb) {
    let minVal;
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (!cb && current < minVal || !minVal) {
            minVal = current
        } else if (cb && cb(current) < minVal || !minVal) {
            minVal = cb(current)
        }
    }
    return minVal;
}






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
