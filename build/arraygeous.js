// https://github.com/HarryStevens/arraygeous#readme Version 0.0.4. Copyright 2019 Harry Stevens.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.arr = {})));
}(this, (function (exports) { 'use strict';

  // Determines whether an array contains a specified element.
  // This method returns true if the array contains the element, and false if not.
  // The optional start parameter, which defaults 0, specifies at which position in the array to start the search.
  function includes(arr, value) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var includes = false;

    for (var i = start; i < arr.length; i++) {
      if (arr[i] === value) {
        includes = true;
        break;
      }
    }

    return includes;
  }

  // Returns the sum of an array of numbers.
  // You can pass an optional accessor.
  // Ignores null values.
  function sum(arr, fn) {
    var sum = 0;

    for (var i = 0, n = arr.length; i < n; i++) {
      var val = fn ? fn(arr[i], i, arr) : arr[i];
      if (val != null && isFinite(val)) sum += val;
    }

    return sum;
  }

  // Returns a random item from an array
  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function unique(arr, fn) {
    var out = [];

    for (var i = 0, n = arr.length; i < n; i++) {
      var d = fn ? fn(arr[i], i, arr) : arr[i];
      if (!includes(out, d)) out.push(d);
    }

    return out;
  }

  exports.includes = includes;
  exports.sum = sum;
  exports.random = random;
  exports.unique = unique;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
