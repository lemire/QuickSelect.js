# QuickSelect.js
Implementation of the QuickSelect algorithm in Java for top-k computations
[![Build Status](https://travis-ci.org/lemire/QuickSelect.js.png)](https://travis-ci.org/lemire/QuickSelect.js)


## npm install
```
npm install quickselect
```

## code sample

```JavaScript
  var QuickSelect = require('quickselect');

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

## Credit 

Inspired by a code sample from Anno Langen.
