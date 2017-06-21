/* This script expects node.js  and mocha */

'use strict';



// very fast semi-random function
function rand(i) {
  i = i + 10000;
  i = i ^ (i << 16);
  i = (i >> 5) ^ i ;
  return i & 0xFF;
}

describe('QuickSelect', function() {
  var QuickSelect = require('../QuickSelect.js');

  it('example1', function() {
    var array = [1,2,3,49,10,-1,-2]
    var cmp = function(a,b){return a<b;};
    var topk = QuickSelect(array,2,cmp).slice(0,2); // should return the two smallest
    if(topk.length != 2) throw 'bug1';
    if(topk[0] != -2) throw "bug";
    if(topk[1] != -1) throw "bug";
  });
  it('large', function() {
    var array = new Array()
    for(var i = 0; i < 10000; i+=1) {
      array[i] = rand(i);
    }
    var dup_array = array.slice();
    dup_array.sort(function(a, b){return a - b});
    var cmp = function(a,b){return a<b;};
    for(var z = 1000; z>= 5; z-=1) {
      var selected = QuickSelect(array,z,cmp);
      // check the pivot
      var pivotvalue = array[z]
      var sliced = selected.slice(0,z).sort(function(a, b){return a - b});
      for(var i = 0; i < z; i++) {
        if(sliced[i] != dup_array[i]) throw "bug";
      }
      for(var i = 0; i < z; i++) {
        if(array[i] > pivotvalue) throw "bug";
      }
      for(var i = z+1; i < array.length; i++) {
        if(pivotvalue > array[i]) throw "bug";
      }

    }
  });
  it('example0', function() {
    var array = [1,2,3,49,10,-1,-2]
    var cmp = function(a,b){return a<b;};
    var topk = QuickSelect(array,7,cmp).slice(0,7); // should return the two smallest
    topk = topk.sort(function(a, b){return a - b});
    console.log(topk);
    if(topk.length != 7) throw 'bug1';
    if(topk[0] != -2) throw "bug";
    if(topk[1] != -1) throw "bug";
  });
  it('example2', function() {
    var array = [1,2,3,49,10,-1,-2];
    var reversecmp = function(a,b){return a>b;};
    var topk = QuickSelect(array,2,reversecmp).slice(0,2); // should return the two largest
    if(topk.length != 2) throw 'bug1';
    topk = topk.sort(function(a, b){return a - b})
    if(topk[0] != 10) throw 'bug2';
    if(topk[1] != 49) throw 'bug3';
  });
});
