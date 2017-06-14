/**
  var QuickSelect = require('QuickSelect.js');

  var array = [1,2,3,49,10,-1,-2]

    

  // QuickSelect rearranges the values so that the k smallest values occur in the first k positions
  // they are not necessarily in sorted order

  var cmp = function(a,b){return a<b;};
  var topk = QuickSelect(array,2,cmp).slice(0,2); 
  // should return an array containing the two smallest (-1, -2)
  


  var reversecmp = function(a,b){return a>b;};
  var topk = QuickSelect(array,2,reversecmp).slice(0,2); 
  // should return an array containing the two largest (10, 49)

**/


var defaultcomparator = function (a, b) {
    return a < b;
};

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function partition(array, leftindex, rightindex, pivotindex, compare) {
  const pivotvalue = array[pivotindex];
  swap(array,pivotindex,rightindex);
  var storeindex = leftindex;
  for(var i = leftindex; i < rightindex; i+= 1) {
    if(compare(array[i], pivotvalue)) {
      swap(array,storeindex,i);
      storeindex += 1;
    }
  }
  swap(array,rightindex,storeindex);
  return storeindex;
}


function select(array, k, compare) {
  var leftindex = 0
  var rightindex = array.length - 1
  while(true) {
    if(leftindex == rightindex) return leftindex;
    var pivotindex = leftindex + Math.floor((rightindex - leftindex) / 2);
    pivotindex = partition(array, leftindex, rightindex, pivotindex, compare);
    if(k == pivotindex) {
      return k;
    }
    if( k < pivotindex ) {
       rightindex = pivotindex - 1
    } else {
       leftindex = pivotindex + 1
    }
  }
}

// Modify the content of the array so that the k smallest elements appear in the first k elements (of course, if the array has fewer than k elements, this fails)
// if the comparator is omitted, the default (<) comparison is used. See https://en.wikipedia.org/wiki/Quickselect.
function QuickSelect(array, k, comparator) {
  var compare = comparator || defaultcomparator;
  if(array.length < k) {
    console.log("array too small.");
    return array;
  }
  var idx = select(array,k,compare);
  if(idx != k) console.log("warning: could not complete quickselect");
  return array;
}

module.exports = QuickSelect;
