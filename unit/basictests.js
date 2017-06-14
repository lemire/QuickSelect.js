/* This script expects node.js  and mocha */

'use strict';


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

  it('example2', function() {
    var array = [1,2,3,49,10,-1,-2];
    var reversecmp = function(a,b){return a>b;};
    var topk = QuickSelect(array,2,reversecmp).slice(0,2); // should return the two largest
    if(topk.length != 2) throw 'bug1';
    topk = topk.sort()
    if(topk[0] != 10) throw 'bug2';
    if(topk[1] != 49) throw 'bug3';
  });
});
