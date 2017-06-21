/* performance benchmark */
/* This script expects node.js */

'use strict';

var QuickSelect = require('../QuickSelect.js');
var FastPriorityQueue = require('fastpriorityqueue');
var Benchmark = require('benchmark');
var os = require('os');

// very fast semi-random function
function rand(i) {
  i = i + 10000;
  i = i ^ (i << 16);
  i = (i >> 5) ^ i ;
  return i & 0xFF;
}
var defaultcomparator = function(a, b) {
  return a < b;
};
var reversedefaultcomparator = function(a, b) {
  return b < a;
};

function QueueEnqueueBench(blocks) {
  console.log('starting dynamic queue/enqueue benchmark');
  var suite = new Benchmark.Suite();
  // add tests
  var ms = suite
    .add('FastPriorityQueue', function() {
      var b = new FastPriorityQueue(reversedefaultcomparator);
      for (var i = 0 ; i < 128  ; i++) {
        b.add(rand(i));
      }
      for (i = 128 ; i < 128 * blocks  ; i++) {
        b.add(rand(i));
        b.poll();
      }
      return b.array.slice(0, k).sort(function(a, b) {
            return a - b
      });
    })
    .add('sort', function() {
          var a = new Array();
          for (var i = 0 ; i < 128 * (blocks + 1)  ; i++) {
            a.push(rand(i));
          }
          a.sort(function(a, b) {
            return a - b
          });
          return a.slice(0,128);
    })
    .add('QuickSelect', function() {
          var a = new Array();
          for (var i = 0 ; i < 128 * (blocks + 1)  ; i++) {
            a.push(rand(i));
          }
          return QuickSelect(a,128,defaultcomparator).slice(0,128).sort(function(a, b) {
            return a - b
          });
    })
    // add listeners
    .on('cycle', function(event) {
      console.log(String(event.target));
    })
    // run async
    .run({'async': false});
}

var main = function() {
  console.log('Platform: ' + process.platform + ' ' + os.release() + ' ' + process.arch);
  console.log(os.cpus()[0]['model']);
  console.log('Node version ' + process.versions.node + ', v8 version ' + process.versions.v8);
  console.log();
  console.log('');
  QueueEnqueueBench(10);
  console.log('');
};

if (require.main === module) {
  main();
}
