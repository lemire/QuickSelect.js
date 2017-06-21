# QuickSelect.js
Implementation of the QuickSelect algorithm in Java for top-k computations
[![Build Status](https://travis-ci.org/lemire/QuickSelect.js.png)](https://travis-ci.org/lemire/QuickSelect.js)


## npm install
```
npm install qselect
```

## code sample

```JavaScript
  var QuickSelect = require('qselect');

  var array = [1,2,3,49,10,-1,-2]

    

  // QuickSelect rearranges the values so that the k smallest values occur in the first k positions
  // they are not necessarily in sorted order

  var cmp = function(a,b){return a<b;};
  var topk = QuickSelect(array,2,cmp).slice(0,2); 
  // should return an array containing the two smallest (-1, -2)
  


  var reversecmp = function(a,b){return a>b;};
  var topk = QuickSelect(array,2,reversecmp).slice(0,2); 
  // should return an array containing the two largest (10, 49)
```

When calling QuickSelect on an array larger than k, the value at index k after calling QuickSelect acts
as a pivot. This means that no value with index less than k can be larger than the pivot, and no
value with index larger than k can be smaller than the pivot.

## Credit 

Inspired by a code sample from Anno Langen.
