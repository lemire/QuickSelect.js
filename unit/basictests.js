/* This script expects node.js  and mocha */

'use strict';


describe('FastPriorityQueue', function() {
  var QuickSelect = require('../QuickSelect.js');

  it('example1', function() {
    var array = [1,2,3,49,10,-1,-2]
    var topk = QuickSelect(array,2); // should return the two smallest
    if(array.length != 2) throw 'bug';
    array.sort()
    if(array[0] != -2) throw 'bug';
    if(array[1] != -1) throw 'bug';
  });

  it('example2', function() {
    var array = [1,2,3,49,10,-1,-2]
    var topk = QuickSelect(array,2, new function(a,b){return b>a;}); // should return the two smallest
    if(array.length != 2) throw 'bug';
    array.sort()
    if(array[0] != 10) throw 'bug';
    if(array[1] != 49) throw 'bug';
  });
});
