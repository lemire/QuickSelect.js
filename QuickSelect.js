


var defaultcomparator = function (a, b) {
    return a < b;
};

// Returns minimum K values of the given array according to the provided comparator,
// if the comparator is omitted, the default (<) comparison is used. See https://en.wikipedia.org/wiki/Quickselect.
function QuickSelect(array, k, comparator) {
  var compare = comparator || defaultcomparator;
  var low = 0;
  var high = array.length;
  while (true) {
    // partition a
    const pivot = array[k];
    var l = low;
    for (var r = high - 1; l <= r;) {
      while (compare(array[l], pivot)) l++;
      while (compare(pivot, array[r])) r--;
      if (l <= r) {
        var t = array[l];
        array[l++] = array[r];
        array[r--] = t;
      }
    }
    if (l < k) low = l + 1;
    else if (l > k + 1) high = l;
    else return array.slice(0, k)
  }
}

module.exports = QuickSelect;
